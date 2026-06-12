import { sequelize } from "../database/db.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger("DB");

export const checkConnection= async ()=>{
try {
    await sequelize.authenticate();
     const message = "Successfully connected";
    logger.info(message);
    
}catch(err){
      const message = "DB connection has failed";
    logger.error(message)

    throw err
}
};