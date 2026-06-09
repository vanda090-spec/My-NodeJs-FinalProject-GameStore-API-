import { Router } from "express";
import {getAllOrders,getOrderByID,postNewOrder,updateOrder,deleteOrderByID} from "../../controller/orders/orders.controller.js";
import {validateToken} from "../../middleware/validateToken.js";

export const router = Router();

router.get('/', getAllOrders);
router.get('/:orderID',validateToken,getOrderByID);

router.post('/',postNewOrder);

router.put('/:orderID',validateToken,updateOrder);

router.delete('/:orderID',validateToken,deleteOrderByID);



export default router;
