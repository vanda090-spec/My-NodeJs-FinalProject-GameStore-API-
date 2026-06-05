import { sequelize } from "../../dal/db.js";

export const checkConnection= async ()=>{
try {
    await sequelize.authenticate();

    console.log("Successfuly connected to DB");
    
}catch(err){

    console.log("DB connection has failed");

    throw err
}
};