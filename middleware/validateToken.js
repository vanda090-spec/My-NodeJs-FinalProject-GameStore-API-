import {verifyToken} from "../utils/token.js";

export const validateToken=(req, res, next) =>{
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            throw {
                status: 401,
                message: 'Access token missing'
            };
        }

        const decodedPayload = verifyToken(token);
        req.user = decodedPayload;
        next();
        
    } catch (err) {
        res.status(err.status || 401).json({
            message: err.message
        });
    }
}

export default validateToken;