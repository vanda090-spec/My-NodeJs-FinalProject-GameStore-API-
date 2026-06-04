import { Router } from "express";
import {logUser,regUser,resetPassword,updatePassword} from "../../controller/users/users.auth.js";
const router = Router();

router.post('/login', logUser);
router.post('/register', regUser);
router.post('/resetPassword', resetPassword);
router.post('/:id/updatePassword', updatePassword);





export default router;