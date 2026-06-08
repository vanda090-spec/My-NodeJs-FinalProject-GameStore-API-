import {Order} from "../../models/orders/orders.model.js";

export const orderDal = {
   getAllGames: () => Order.findAll(),

   getGamesByID: (orderID) => Order.findByPk(orderID),

    postNewGame: (orderData) => Order.create(orderData),

    updateGame: async (orderID, orderData) => {
        await Order.update(orderData, {
            where:
            {
                OrderID: orderID
            }
        });
        return Order.findByPk(orderID);
    },

    deleteGameByID: (orderID) => {
        return Order.destroy({
            where:
            {
                Order: orderID
            }
        });
    }
};