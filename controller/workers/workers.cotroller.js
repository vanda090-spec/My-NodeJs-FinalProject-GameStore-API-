import { getAllWorkersService, getWorkerByIdService, postNewWorkerService, deleteWorkerByIdService } from "../../services/workers.js";
import { updateWorkerService } from "../../services/workers/workers.service";
export const getAllworkers = async (req, res) => {
    try {
        const response = await getAllWorkersService();

        const { status, ...data } = response;

        res.status(status).json(data)

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}
export const getWorkerByID = async (req, res) => {
    try {
        const WorkerID = req.params.WorkerID;

        const response = await getWorkerByIdService(WorkerID);

        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}
export const postNewWorker =  async (req,res) =>{
 try{
       
    const WorkerData=req.body;

    const response = await postNewWorkerService(WorkerData)

    const {status,...data}=response;
    
    res.status(status).json(data);

 }catch(err){

    res.status(err.status || 500).json(err.message);
 }
}
export const updateWorker = async (req,res)=>{
    try{
            const workerID=req.params.WorkerID;
    const workerData=req.body;

    const response=await updateWorkerService(workerID,workerData);
    
    const {status,...data}=response;
    
    res.status(status).json(data)

    }catch(err){
     res.status(err.status || 500).json(err.message)
    }
}
export const deleteWorkerByID=async(req,res)=>{
    try{
        const workerID=req.params.WorkerID;

        const response=await deleteWorkerByIdService(WorkerID);

        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message);
    }
}
