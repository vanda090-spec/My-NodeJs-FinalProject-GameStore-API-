import { Router } from "express";
import { getAllworkers, getWorkerByID,postNewWorker, updateWorker, deleteWorkerByID } from "../../controller/workers/workers.cotroller.js";
import {validateToken} from "../../middleware/validateToken.js";
const router = Router();

router.get('/',validateToken, getAllworkers);
router.get('/:workerID',validateToken,getWorkerByID);

router.post('/',validateToken,postNewWorker);

router.put('/:workerID',validateToken,updateWorker);

router.delete('/:workerID',validateToken,deleteWorkerByID);


export default router;