import {getAllOrdersService,getOrderByIDService,postNewOrderService,updateOrderService,deleteOrderByIDService} from "../../services/orders/orders.service.js";

export const  getAllOrders = async(req,res)=>{
    try {
        const response= await getAllOrdersService();
        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message);
    }
}

export const getOrderByID = async(req,res)=>{
    try {
        const {orderID}=req.params;
        
        const response = await getOrderByIDService(orderID);
        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message);
    }
}

export const  postNewOrder = async(req,res)=>{
    try {
        const {orderData}=req.body;

        const response= await postNewOrderService(orderData);
        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message);
    }
}

export const updateOrder = async(req,res)=>{
    try {
        const {orderID}=req.params;
        const {orderData}=req.body;

        const response= await updateOrderService(orderID,orderData);
        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message);
    }
}

export const  deleteOrderByID = async(req,res)=>{
    try {
        const {orderID}=req.params;

        const response= await deleteOrderByIDService(orderID);
        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message);
    }
}