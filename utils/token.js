import jwt from "jsonwebtoken";
import {jwtSecret} from "../config/index.js";

const payload={role:'user'};
const secret='blala';

const token=jwt.sign(payload,secret,{expiresIn:'180'});

