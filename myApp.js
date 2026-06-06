import express from "express";
import apiRoutes from "./routes/index.js";
import cors from "cors";
import { isValid } from "./utils/reqValidation.js";


export const myApp=express();


myApp.use(cors());
myApp.use(express.json());

myApp.use("/main",isValid,apiRoutes)


export default myApp;

