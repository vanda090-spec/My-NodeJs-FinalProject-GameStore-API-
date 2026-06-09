import { Router } from "express";
import usersInfoRoutes from "./users/users.info.js";
import usersAuthRoutes from "./users/users.auth.js";
import workersRoutes from ".././routes/workers/workers.js";
import gamesRoutes from "../routes/games/games.js";
import ordersRoutes from "../routes/orders/orders.js";

export const router=Router();


router.use('/users/info',usersInfoRoutes);
router.use('/users/auth',usersAuthRoutes);
router.use('/workers',workersRoutes);
router.use('/games',gamesRoutes);
router.use('/orders',ordersRoutes);





export default router;