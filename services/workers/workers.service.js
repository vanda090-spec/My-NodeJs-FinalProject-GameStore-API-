import { workerDal } from "../../dal/workers/workers.dal.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger('Workers')

export const getAllWorkersService = async () => {
    const workers = await workerDal.getAllworkers();

    if (!workers || workers.length === 0) {
        const msg = "No workers found";
        logger.error(msg);
        throw { status: 404, message: msg }
    }
    const msg = `Found ${workers.length} workers`;
    logger.info(msg);
    return { status: 200, workers };
}
export const getWorkerByIdService = async (workerID) => {

    const worker = await workerDal.getWorkerByID(workerID)
    if (!worker) {
        const msg = `Worker ${workerID} not found`
        logger.error(msg)
        throw { status: 404, message: msg }
    }
    const msg = `Worker ${workerID} found`
    logger.info(msg)
    return { status: 200, worker };
}
export const postNewWorkerService = async (workerData) => {
    const newWorker = await workerDal.postNewWorker(workerData);

    if (!newWorker) {
        const msg = `Failed to add new worker`;
        logger.error(msg)
        throw { status: 400, message: msg };
    }
    const msg = `Added new worker ${newWorker.WorkerID}`
    logger.info(msg)
    return { status: 201, message: msg, worker: newWorker };
}
export const updateWorkerService = async (workerID, workerData) => {
    const worker = await workerDal.getWorkerByID(workerID);

    if (!worker) {
        const msg = `Worker not found`;
        logger.error(msg)
        throw { status: 404, message: msg };
    }
    const updatedWorkerData = await workerDal.updateWorker(workerID, workerData);
    const msg = `Worker ${workerID} data has been updated`;
    logger.info(msg);
    return { status: 200, message: msg, worker: updatedWorkerData };
}
export const deleteWorkerByIdService = async (workerID) => {
    const worker = await workerDal.getWorkerByID(workerID);

    if (!worker) {
        const msg = `Worker ${workerID} not found`;
        logger.error(msg)
        throw { status: 404, message: msg }
    }
    await workerDal.deleteWorkerByID(workerID);
    const msg = `Worker ${workerID} has been deleted`;
    logger.info(msg);
    return { status: 200, message: msg }
}