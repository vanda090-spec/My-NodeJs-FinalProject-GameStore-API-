import "dotenv/config";

export const port=process.env.PORT;
export const jwtSecret=process.env.JWT_SECRET;
export const sql={
    dbName:process.env.SQL_DB_NAME,
    user:process.env.SQL_USER,
    password:process.env.SQL_PASS,
    host:process.env.DB_SERVER
};
export default {port,jwtSecret,sql};