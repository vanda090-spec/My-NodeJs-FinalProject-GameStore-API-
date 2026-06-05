import { hashPassword } from "../../utils/hashPassword.js";
import { comparePassword } from "../../utils/comparePassword.js";
import { userDal } from "../../dal/users.dal.js";

export const logUserService = async (userName, password) => {
    const hashedPassword = await hashPassword(password);
    const isValid = await comparePassword(password, hashedPassword);
     if (!userName || !isValid) {
        throw { status: 400, message: "Invalid user or password name" };
    }
     return {status:200, message:"User has been logged successfully"};
};

export const registerUserService = async (userData) => {
    if (!userData || Object.keys(userData).length === 0) {
        throw { status: 400, message: "Invalid data" };
    }
     return {status:200, message:"User has been registered successfully"};
};
export const updateUserService = async (userID, updatedPassword) => {
    if (!userID || !updatedPassword) {
      throw { status: 400, message: "Invalid username / password" };
    }
     return { status: 200, message: "User/Password has been updated successfully" };
};
export const userResetService = async (userName) => {
    
    if (!userName) {
        throw { status: 400, message: "Invalid username" };
    }
    return {status:200, message:"Password has been reseted successfully"};
};



