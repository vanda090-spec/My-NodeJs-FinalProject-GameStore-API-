import express from "express";
import apiRoutes from "./routes/index.js";
import cors from "cors";


export const myApp=express();


myApp.use(cors());
myApp.use(express.json());

myApp.use("/users",apiRoutes)

export default myApp;