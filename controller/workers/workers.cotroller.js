
export const ShowAllWorkers=async (req,res) =>{
try {
      const workerID=req.params;
      
      const response=await getAllworkers(workerID);
}catch(err){

}

}


