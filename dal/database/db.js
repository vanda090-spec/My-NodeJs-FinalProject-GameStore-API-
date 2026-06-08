import { Sequelize } from "sequelize";
import { sql } from "../../config/index.js";

export const sequelize = new Sequelize(
    sql.dbName,
    sql.user,
    sql.password, {
    dialect: "mssql",
    host:sql.host,
    dialectOptions: {
        options: {
            instanceName:sql.instanceName,
            trustServerCertificate:true,
            encrypt:false,
            connectTimeout:15000,
            requestTimeout:15000
            
        }
    }
}
);
