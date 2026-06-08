import {Order} from "../../models/orders/orders.model.js";

export const orderDal = {
   getAllOrder: () => Order.findAll(),

   getOrderByID: (orderID) => Order.findByPk(orderID),

    postNewOrder: (orderData) => Order.create(orderData),

    updateOrder: async (orderID, orderData) => {
        await Order.update(orderData, {
            where:
            {
                OrderID: orderID
            }
        });
        return Order.findByPk(orderID);
    },

    deleteOrderByID: (orderID) => {
        return Order.destroy({
            where:
            {
                OrderID: orderID
            }
        });
    }
};