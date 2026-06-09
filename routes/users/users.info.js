import { Router } from "express";


const router = Router();

router.get('/', getAllUsers);
router.get('/:userID', getUserById);
router.delete('/:userID', deleteUserByID);


export default router;