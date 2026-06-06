import { getAllWorkersService, getWorkerByIdService, postNewWorkerService,updateWorkerService, deleteWorkerByIdService } from "../../services/workers/workers.service.js";

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
        const workerID = req.params.workerID;

        const response = await getWorkerByIdService(workerID);

        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}
export const postNewWorker =  async (req,res) =>{
 try{
       
    const workerData=req.body;

    const response = await postNewWorkerService(workerData)

    const {status,...data}=response;
    
    res.status(status).json(data);

 }catch(err){

    res.status(err.status || 500).json(err.message);
 }
}
export const updateWorker = async (req,res)=>{
    try{
            const workerID=req.params.workerID;
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
        const workerID=req.params.workerID;

        const response=await deleteWorkerByIdService(workerID);

        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message);
    }
}
