

export const getAllUsers= async(req,res)=>{ 
    try{

        const response = await getAllUsersService();
        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        
        res.status(err.status || 500).json(err.message)
    }
}

export const getUserById= async (req,res)=>{
    try{
        const {userID}=req.body;

    const response = await getUserByIdService(userID);
    const {status,... data}=response;

    res.status(status).json(data)
    }
    catch(err){
        res.status(err.status || 500).json(data);
    }
}

export const  deleteUserByID = async (req,res)=>{
    try{

        const {userID}=req.params;

        const response=await  deleteUserService(userID);
        const{status,...data}=response;

        res.status(status).json(data);
    }
    catch(err){
        
        res.status(err.status || 500).json(err.message);
    }
}
