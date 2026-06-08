import { Router } from "express";

export const router = Router();

router.get('/', getAllOrders);
router.get('/:gameID', getOrderByID);

router.post('/', postNewOrder);

router.put('/:gameID', updateOrder);

router.delete('/:gameID', deleteOrderByID);



export default router;