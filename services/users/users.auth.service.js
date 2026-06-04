import { hashPassword } from "../../utils/hashPassword.js";
import { comparePassword } from "../../utils/comparePassword.js";

export const logUserService= async (password)=>{    
    const hashedPassword= await hashPassword(password);
    const isValid= await comparePassword(password,hashedPassword)
    return isValid;
}; 

export const registerUserService= async (userData)=>{
    const {body} = userData.body;
    if(!body || Object.keys.length==0){
        throw {status:}
    }  
    
}; 


