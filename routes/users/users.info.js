import { Router } from "express";
import {getUsers,getUserById,deleteUser} from "../../controller/users/users.info.controller.js";

const router = Router();

router.get('/', getUsers);
router.get('/:userID', getUserById);
router.delete('/:userID', deleteUser);


export default router;