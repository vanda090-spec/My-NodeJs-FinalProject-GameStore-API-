export const workerDal = {
    getAllworkers: () => Worker.findAll(),

     getWorkerByID: (WorkerID) => Worker.findByPk(WorkerID),

   postNewWorker: (WorkerData) => Worker.create(WorkerData),

    updateWorker: async (WorkerID, WorkerData) => {
        await Worker.update(WorkerData, { where: { 
            WorkerID:WorkerID } 
        });
        return Worker.findByPk(WorkerID);
    },
    deleteWorkerByID: (WorkerID) => {
        return Worker.destroy({where:{
            WorkerID:WorkerID
        }});
    }
};