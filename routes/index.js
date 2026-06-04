import { Router } from "express";
import usersInfo from "./users/users.info.js";
import usersAuth from "./users/users.auth.js";

export const router=Router();


router.use('/info',usersInfo);
router.use('/auth',usersAuth);



export default router;