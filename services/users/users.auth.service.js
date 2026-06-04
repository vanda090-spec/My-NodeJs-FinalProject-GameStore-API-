import { hashPassword } from "../../utils/hashPassword.js";
import { comparePassword } from "../../utils/comparePassword.js";

export const logUserService = async (userName, password) => {
    if (!userName) {
        throw { status: 400, message: "Invalid user name" };
    }
    const hashedPassword = await hashPassword(password);
    const isValid = await comparePassword(password, hashedPassword)
    return isValid;
};

export const registerUserService = async (userData) => {
    if (!userData || Object.keys(userData).length === 0) {
        throw { status: 400, message: "Invalid data" };
    }
    return true;
};
export const updateUserService = async (userID, updatedPassword) => {
    if (!userID || !updatedPassword) {
        throw { status: 400, message: "Invalid username / password" }
    }
};
export const userResetService = async (userName) => {
    ;
    if (!userName) {
        throw { status: 400, message: "Invalid username" };
    }
};



