import { orderDal } from "../../dal/orders/orders.dal.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger('Orders:')

export const getAllOrdersService = async () => {

    const orders = await orderDal.getAllOrder();

    if (!orders || orders.length == 0) {
        const msg = "No orders found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${orders.length} orders`;
    logger.info(msg);
    return { status: 200, message: msg, orders }
}

export const getOrderByIDService = async (orderID) => {

    const order = await orderDal.getOrderByID(orderID);

    if (!order) {
        const msg = `Order ${orderID} not found`;
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Order ID found:${orderID}`;
    logger.info(msg);
    return { status: 200, message: msg, order };
}

export const postNewOrderService = async (orderData) => {

    const order = await orderDal.postNewOrder(orderData);
    if (!order) {
        const msg = `Failed to create new order`;
        logger.error(msg);
        throw { status: 400, message: msg };
    }
    const msg = `New order : ${order.OrderID} created`;
    logger.info(msg);
    return { status: 201, message: msg, order }
}

export const updateOrderService = async (orderID, orderData) => {

    const order = await orderDal.getOrderByID(orderID);
    if (!order) {
        const msg = `Order ${orderID} not found`;
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const updatedOrder = await orderDal.updateOrder(orderID, orderData);
    const msg = `Updated order: ${orderID}`;
    logger.info(msg);

    return { status: 200, message: msg, updatedOrder }
}

export const deleteOrderByIDService = async (orderID) => {

    const order = await orderDal.getOrderByID(orderID);
    if (!order) {
        const msg = `Order ${orderID} not found`;
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    await orderDal.deleteOrderByID(orderID);
    const msg = `Deleted order id ${orderID} successfully`;
    logger.info(msg);
    return { status: 200, message: msg };
}