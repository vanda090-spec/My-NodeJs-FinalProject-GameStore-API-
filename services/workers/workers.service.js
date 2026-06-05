import { workerDal } from "../../dal/workers/workers.dal";

export const getAllworkers=async ()=>{

    const workers= await workerDal.getAllworkers();
    if(!workers || workers.length===0){
        throw {status:404,message:"No workers found"}
    }
    return {status:200,workers:workers};
}
export const getWorkerByID=async (WorkerID)=>{

    const worker= await workerDal.getWorkerByID(WorkerID)
    if(!worker){
        throw {status:404,message:"Worker not found"}
    }
    return {status:200,worker:worker};
}
export const postNewWorker=async (WorkerData)=>{
    const newWorker= await workerDal.postNewWorker(WorkerData);
    if(!newWorker){
        throw {status:400,message:"Failed to add new worker"};
    }
    return {status:201,message:"New worker has been added",worker:newWorker};
}
export const updateWorker=async (WorkerID,WorkerData)=>{
    const worker=await workerDal.getWorkerByID(WorkerID);
    if(!worker){
        throw {status:404,message:"Worker not found"};
    }
    const UpdatedWorkerData=await workerDal.updateWorker(WorkerID,WorkerData);
    return {status:200,message:"Workers data has been updated",worker:UpdatedWorkerData};
}
export const  deleteWorkerByID=async(WorkerID)=>{
    const worker=await workerDal.getWorkerByID(WorkerID);
    if(!worker){
        throw {status:404,message:"Worker not found"}
    }
    const DeletedWorker=await workerDal.deleteWorkerByID(WorkerID);
    return {status:200,message:"Worker has been deleted",WorkerID:DeletedWorker}
}