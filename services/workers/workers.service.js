import { workerDal } from "../../dal/workers/workers.dal.js";

export const getAllWorkersService=async ()=>{

    const workers= await workerDal.getAllworkers();
    if(!workers || workers.length===0){
        throw {status:404,message:"No workers found"}
    }
    return {status:200,workers:workers};
}
export const getWorkerByIdService=async (workerID)=>{

    const worker= await workerDal.getWorkerByID(workerID)
    if(!worker){
        throw {status:404,message:"Worker not found"}
    }
    return {status:200,worker:worker};
}
export const postNewWorkerService=async (workerData)=>{
    const newWorker= await workerDal.postNewWorker(workerData);
    if(!newWorker){
        throw {status:400,message:"Failed to add new worker"};
    }
    return {status:201,message:"New worker has been added",worker:newWorker};
}
export const updateWorkerService=async (workerID,workerData)=>{
    const worker=await workerDal.getWorkerByID(workerID);
    if(!worker){
        throw {status:404,message:"Worker not found"};
    }
    const updatedWorkerData=await workerDal.updateWorker(workerID,workerData);
    return {status:200,message:"Workers data has been updated",worker:updatedWorkerData};
}
export const  deleteWorkerByIdService=async(workerID)=>{
    const worker=await workerDal.getWorkerByID(workerID);
    if(!worker){
        throw {status:404,message:"Worker not found"}
    }
    const DeletedWorker=await workerDal.deleteWorkerByID(workerID);
    return {status:200,message:"Worker has been deleted"}
}