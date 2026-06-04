import jwt from "jsonwebtoken";
import {jwtSecret} from "../config/index.js";

export const createToken=(payload,options)=>{
    try {
        return jwt.sign(payload,jwtSecret,options)
    }catch(err){
       throw err
    }
};

export const verifyToken =(token)=>{
    try{
        return jwt.verify(token,jwtSecret)
    }catch(err){
        throw err 
    }
};