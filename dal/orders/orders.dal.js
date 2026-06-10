import { Order } from "../../models/orders/orders.model.js";
import { User } from "../../models/users/users.models.js";
import { Games } from "../../models/games/games.model.js";
import { Worker } from "../../models/workers/workers.model.js";

export const orderDal = {
    getAllOrder: () => Order.findAll({
        include: [
            {
                model:User,
                attributes:{exclude:["userPassword"]}
            }, Games,
            {
                model:Worker,
                attributes:["WorkerID","WorkerName"]
            },
        ]
    }),

    getOrderByID: (orderID) => Order.findByPk(orderID, {
        include: [
            {
                model:User,
                attributes:{exclude:["userPassword"]}
            }, Games,
            {
                model:Worker,
                attributes:["WorkerID","WorkerName"]
            },
        ]
    }),

    postNewOrder: (orderData) => Order.create(orderData),

    updateOrder: async (orderID, orderData) => {
        await Order.update(orderData, {
            where:
            {
                OrderID: orderID
            }
        });
        return Order.findByPk(orderID, {
            include: [
            {
                model:User,
                attributes:{exclude:["userPassword"]}
            }, Games,
            {
                model: Worker,
                attributes: ["WorkerID", "WorkerName"]
            }
        ]
        });
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