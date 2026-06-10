import { Router } from "express";
import {getAllUsers,getUserById,deleteUserByID} from "../../controller/users/users.info.controller.js";
import {validateToken} from "../../middleware/validateToken.js";


const router = Router();

router.get('/',validateToken,getAllUsers);
router.get('/:userID',validateToken,getUserById);
router.delete('/:userID',validateToken,deleteUserByID);


export default router;