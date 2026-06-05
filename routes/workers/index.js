import { Router } from "express";
const router = Router();

router.get('/', getAllworkers);
router.get('/:workerID', getWorkerByID);

router.post('/', postNewWorker);
router.put('/:workerID', updateWorkerByID);
router.delete('/:workerID',deleteWorkerByID);


export default router;