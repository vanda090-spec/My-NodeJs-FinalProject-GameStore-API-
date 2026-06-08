import { Router } from "express";
import {getAllOrders,getOrderByID,postNewOrder,updateOrder,deleteOrderByID} from "../../controller/orders/orders.controller.js";

export const router = Router();

router.get('/', getAllOrders);
router.get('/:orderID', getOrderByID);

router.post('/', postNewOrder);

router.put('/:orderID', updateOrder);

router.delete('/:orderID', deleteOrderByID);



export default router;