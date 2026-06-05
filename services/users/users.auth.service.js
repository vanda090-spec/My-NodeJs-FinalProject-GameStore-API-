import { hashPassword } from "../../utils/hashPassword.js";
import { comparePassword } from "../../utils/comparePassword.js";
import { createToken } from "../../utils/token.js";
import { userDal } from "../../dal/users/users.dal.js";

export const logUserService = async (userName, password) => {

    const user = await userDal.getUserByName(userName);

    if (!user) {
        throw { status: 400, message: "User not found" };
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
        throw { status: 400, message: "Invalid user or password name" };
    }

    const token = createToken(
        {
            id: user.id,
            name: user.name
        },
        {
            expiresIn: "1h"
        }
    );
    return { status: 200, message: "User has been logged successfully", token };
};

export const registerUserService = async (userData) => {

    userData.password = await hashPassword(userData.password);

    const user = await userDal.registerUser(userData);

    if (!user) {
        throw { status: 400, message: "Invalid data" };
    }

    const { password, ...cleanUser } = user

    return { status: 200, message: "User has been registered successfully", user: cleanUser };
};

export const updateUserService = async (userID, updatedPassword) => {

    const hashedPassword = await hashPassword(updatedPassword);

    const user = await userDal.updateUser(userID, { password: hashedPassword })

    if (!user) {
        throw { status: 400, message: "Invalid username / password" };
    }

    const { password, ...cleanUser } = user;

    return { status: 200, message: "User/Password has been updated successfully", user: cleanUser };
};

export const userResetService = async (userID, newPassword) => {
    if (!userID || !newPassword) {
        throw { status: 400, message: "Invalid user/password" };
    }

    const hashedPassword = await hashPassword(newPassword);

    const user= await userDal.updateUser(userID,{password:hashedPassword});

    if(!user){
        throw {status:400,message:"User not found"};
    }
    
    const {password,...cleanUser}=user;
    return {status:200,message:"Password has been reset successfuly",user:cleanUser}
};



