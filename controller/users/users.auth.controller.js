import { logUserService, registerUserService, updateUserService, userResetService } from "../../services/users/users.auth.service.js";

export const logUser = async (req, res) => {
    try {

        const { userName, password } = req.body;
        
        const response = await logUserService(userName, password);

        const { status, ...data } = response

        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).json(err.message);
    }
}

export const regUser = async (req, res) => {
    try {

        const userData = req.body;

        const response = await registerUserService(userData);

        const { status, ...data } = response

        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).json(err.message);
    }
}

export const updatePassword = async (req, res) => {
    try {

        const { userID } = req.params;

        const { updatedPassword } = req.body;

        const response = await updateUserService(userID, updatedPassword);

        const { status, ...data } = response

        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).json(err.message);
    }
}

export const resetPassword = async (req, res) => {
    try {

        const { userID,newPassword } = req.body;

        const response = await userResetService(userID,newPassword);

        const { status, ...data } = response

        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).json(err.message);
    }
}
