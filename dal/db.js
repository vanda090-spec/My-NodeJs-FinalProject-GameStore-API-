import { Sequelize } from "sequelize";
import {sql} from "../config/index.js";

export const sequelize=new Sequelize(
    sql.dbName,
    sql.user,
    sql.password,{
        host:sql.host,
        dialect:"mssql"
    }
);