import { createLogger } from "../../utils/logger.js";
import { userDal } from "../../dal/users/users.dal.js";



const logger = createLogger("UsersInfoService");

export const getUsersService = async () => {

    const users = await userDal.getUsers();
    if (!users || users.length == 0) {
        const message = `Users not found`
        logger.warn(message)
        throw {
            status: 404,
            message: message
        }
    }
    const message = `Users found:${users.length}`;
    logger.info(message);
    return {
        status: 200,
        message: message,
        users: users
    }

}

export const getUserByIdService = async (userID) => {

    const user = await userDal.getUserById(userID);
    if (!user) {
        const message = `User ${userID} not found`;
        logger.warn(message);
        throw {
            status: 404,
            message: message
        }
    }
    const message = `User ${user.userName} found`;
    logger.info(message);
    return {
        status: 200,
        message: message,
        user: user
    }
}

export const deleteUserService = async (userID) => {

    const user = await userDal.getUserById(userID);
    if (!user) {
        const message = `User ${userID} not found`;
        logger.warn(message);
        throw {
            status: 404,
            message
        }
    }
    await userDal.deleteUser(userID);
    const message = `User ${user.userName} deleted successfully`;
    logger.info(message);
    return {
        status: 200,
        message: message,
        user: user
    }
};
