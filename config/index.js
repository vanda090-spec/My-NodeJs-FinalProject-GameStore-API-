import "dotenv/config";

export const port=process.env.PORT;

export const jwtSecret=process.env.JWT_SECRET;

export const sql={
    dbName:process.env.DB_NAME,
    host:process.env.DB_SERVER,
    instanceName:process.env.DB_INSTANCE,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
};

export default {port,jwtSecret,sql};