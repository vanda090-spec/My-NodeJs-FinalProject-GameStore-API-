import { Router } from "express";
import { getAllworkers, getWorkerByID,postNewWorker, updateWorker, deleteWorkerByID } from "../../controller/workers/workers.cotroller.js";
const router = Router();

router.get('/', getAllworkers);
router.get('/:workerID', getWorkerByID);

router.post('/',postNewWorker);

router.put('/:workerID', updateWorker);

router.delete('/:workerID', deleteWorkerByID);


export default router;