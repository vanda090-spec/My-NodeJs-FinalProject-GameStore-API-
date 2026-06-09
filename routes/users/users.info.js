import { Router } from "express";


const router = Router();

router.get('/', getUsers);
router.get('/:userID', getUserById);
router.delete('/:userID', deleteUser);


export default router;