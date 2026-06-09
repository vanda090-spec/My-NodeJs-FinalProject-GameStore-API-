import { Router } from "express";
import {getAllUsers,getUserById,deleteUserByID} from "../../controller/users/users.info.controller.js";


const router = Router();

router.get('/', getAllUsers);
router.get('/:userID', getUserById);
router.delete('/:userID', deleteUserByID);


export default router;