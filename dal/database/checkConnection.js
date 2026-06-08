import { sequelize } from "../database/db.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("dbConnection");

export const checkConnection= async ()=>{
try {
    await sequelize.authenticate();
    logger.info("Successfuly connected to DB");
    
}catch(err){
    logger.error("DB connection has failed")

    throw err
}
};