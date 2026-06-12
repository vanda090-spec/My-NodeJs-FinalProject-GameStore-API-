import express from "express";
import apiRoutes from "./routes/index.js";
import cors from "cors";
import { isValid } from "./utils/reqValidation.js";
import { createLogger } from "./utils/logger.js";


export const myApp=express();


myApp.use(cors());
myApp.use(express.json());

const logger=createLogger('APP')

myApp.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});

myApp.use("/main",isValid,apiRoutes)


export default myApp;

