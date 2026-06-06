import { Router } from "express";
import usersInfoRoutes from "./users/users.info.js";
import usersAuthRoutes from "./users/users.auth.js";
import workersRoutes from ".././routes/workers/workers.js"

export const router=Router();


router.use('/info',usersInfoRoutes);
router.use('/auth',usersAuthRoutes);
router.use('/workers',workersRoutes);



export default router;