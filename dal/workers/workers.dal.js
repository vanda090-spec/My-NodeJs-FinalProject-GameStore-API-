import {Worker} from "../../models/workers/workers.model.js";
export const workerDal = {
    getAllworkers: () => Worker.findAll(),

    getWorkerByID: (workerID) => Worker.findByPk(workerID),

    postNewWorker: (workerData) => Worker.create(workerData),

    updateWorker: async (workerID, workerData) => {
        await Worker.update(workerData, {
            where:
            {
                WorkerID: workerID
            }
        });
        return Worker.findByPk(workerID);
    },

    deleteWorkerByID: (workerID) => {
        return Worker.destroy({
            where:
            {
                WorkerID: workerID
            }
        });
    }
};