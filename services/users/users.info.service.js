import { createLogger } from "../../utils/logger.js";


const logger = createLogger("UsersInfoService:");

export const getUsersService = async ()=>{
try {

    const users = await getUsers();
    const message = `Users: ${users}`;
    
    logger.info(message);
}
catch(err){
    logger.error("Users not found");
}

}

export const getUserByIdService = async (userID)=>{

    const user = await  getUserById(userID);
    if 

}

export const  deleteUserService=async ()=>{


}