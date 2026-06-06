import { Router } from "express";
import usersInfoRoutes from "./users/users.info.js";
import usersAuthRoutes from "./users/users.auth.js";
import workersRoutes from ".././routes/workers/workers.js"

export const router=Router();


router.use('/usersInfo',usersInfoRoutes);
router.use('/usersAuth',usersAuthRoutes);
router.use('/workers',workersRoutes);



export default router;