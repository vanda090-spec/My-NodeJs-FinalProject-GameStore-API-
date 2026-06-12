import jwt from "jsonwebtoken";
import {jwtSecret} from "../config/index.js";
import { createLogger } from "./logger.js"


const logger=createLogger('Token UTIL');

export const createToken = (payload, options) => {
    try {
        const token = jwt.sign(payload, jwtSecret, options);
        logger.info("Generated Token");
        return token;
    } catch (err) {
        throw err;
    }
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, jwtSecret);
        logger.info("Token verified");
        return decoded;
    } catch (err) {
        logger.error("Token validation failed");
        throw err;
    }
};