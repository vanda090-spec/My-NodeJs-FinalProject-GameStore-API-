import {getUsersService,getUserByIdService,deleteUserService} from "../../services/users/users.info.service.js";

export const getAllUsers= async(req,res)=>{ 
    try{
        const userID=req.user.userID;

        const response = await getUsersService(userID);
        const {status,...data}=response;

        res.status(status).json(data);
    }catch(err){
        
        res.status(err.status || 500).json(err.message)
    }
}

export const getUserById= async (req,res)=>{
    try{
        const {userID}=req.params;

    const response = await getUserByIdService(userID);
    const {status,... data}=response;

    res.status(status).json(data)
    }
    catch(err){
        res.status(err.status || 500).json(err.message);
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
