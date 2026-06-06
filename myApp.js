import express from "express";
import apiRoutes from "./routes/index.js";
import cors from "cors";
import router from "./routes/index.js";


export const myApp=express();


myApp.use(cors());
myApp.use(express.json());

myApp.use("/main",apiRoutes)


export default myApp;