import { hashPassword } from "../../utils/hashPassword.js";
import { comparePassword } from "../../utils/comparePassword.js";
import { createToken } from "../../utils/token.js";
import { createLogger } from "../../utils/logger.js";

import { userDal } from "../../dal/users/users.dal.js";


const logger = createLogger("UsersAuthService");

export const getUsers = async ()=>{

}
export const logUserService = async (userName, userPassword) => {

    const user = await userDal.getUserByName(userName);

    if (!user) {
        const message = `User ${userName} not found`;
            logger.error(message)
        throw { status: 400, message};
    
    }
    const isValid = await comparePassword(userPassword, user.userPassword);
    if (!isValid) {
        const message = "Invalid user or password";
        logger.warn(message);
        throw { status: 400,message:message};
        
    }

    const token = createToken(
        {
            id: user.userID,
            name: user.userName
        },
        {
            expiresIn: "1h"
        }
    );
    const message = `User ${userName} logged in`;
    logger.info(message);
    return { status: 200, message, token };
};

export const registerUserService = async (userData) => {

    userData.userPassword = await hashPassword(userData.userPassword);

    const user = await userDal.registerUser(userData);

    if (!user) {
        const message = "Invalid data";
        logger.error(message)
        throw { status: 400,message:message};
    }

    const { userPassword, ...cleanUser } = user
    const message = `New user ${user.userName} registered`;
    logger.info(message);
    return { status: 201, message,user: cleanUser };
};

export const updateUserService = async (userID, updatedPassword) => {

    const hashedPassword = await hashPassword(updatedPassword);

    const user = await userDal.updateUser(userID, { userPassword: hashedPassword })

    if (!user) {
        const message = `User ${userID} not found`;
        logger.error(message);
        throw { status: 400, message:message};
    }

    const { userPassword, ...cleanUser } = user;
    const message = `Password updated for ${userID}`;
    logger.info(message);
    return { status: 200, message:message, user: cleanUser };
};

export const userResetService = async (userID, newPassword) => {
    if (!userID || !newPassword) {
         const message = "Invalid password";
        logger.error(message)
        throw { status: 400, message:message};
    }

    const hashedPassword = await hashPassword(newPassword);

    const user= await userDal.updateUser(userID,{userPassword:hashedPassword});

    if(!user){
          const message = `User ${userID} not found`;
        logger.error(message)
        throw {status:400,message:message};
    }

    const {userPassword,...cleanUser}=user;
    const message = "Password has been reset successfuly";
    logger.info(message);
    return {status:200,message:message,user:cleanUser}
};



