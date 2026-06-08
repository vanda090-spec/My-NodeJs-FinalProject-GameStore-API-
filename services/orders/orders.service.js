import { orderDal } from "../../dal/orders/orders.dal.js";

export const getAllOrdersService = async () => {

    const order = await orderDal.getAllOrder();

    if (!order) {
        throw { status: 404, message: "Order not found" };
    }

    return { status: 200, message: "Order found", order: order }
}

export const getOrderByIDService = async (orderID) => {

    const order = await orderDal.getOrderByID(orderID);

    if (!order) {
        throw { status: 400, message: "Invalid order id" };
    }

    return { status: 200, orderID: order };
}

export const postNewOrderService = async (orderData)=>{

    const order=await orderDal.postNewOrder(orderData);
    if(!order){
        throw {status:400,message:"Invalid data"};
    }
    return {status:200,order:order}
}

export const updateOrderService =async(orderID,orderData)=>{

    const order=await orderDal.getOrderByID(orderID);
    if(!order){
        throw {status:400,message:"Inavalid id"};
    }
    const updatedOrder=await orderDal.updateOrder(orderID,orderData);
    
    return {status:200,updatedOrder:updatedOrder}
}

export const deleteOrderByIDService = async (orderID)=>{

    const order=await orderDal.getOrderByID(orderID);
    if(!order){
        throw {status:400,message:"Failed to delete order"};
    }

    const deletedOrder=await orderDal.deleteOrderByID(orderID);
    return{status:200,message:"Order deleted successfully"};
}