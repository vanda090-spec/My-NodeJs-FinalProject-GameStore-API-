import { Router } from "express";
import {logUser,regUser,resetPassword,updatePassword} from "../../controller/users/users.auth.controller.js"
const router = Router();

router.post('/login', logUser);
router.post('/register', regUser);

router.put('/resetPassword', resetPassword);
router.patch('/:userID/updatePassword', updatePassword);


export default router;