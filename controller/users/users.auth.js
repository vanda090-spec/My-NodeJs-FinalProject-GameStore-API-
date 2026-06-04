import { usersAuthService } from "../../services/users/users.auth.service.js";
export const logUser = async (req, res) => {
    try {

        const { userName, password } = req.body;
        if (!userName || !password) {
            throw {
                status: 400,
                message: "Invalid user name or password ,try again"
            }
        }

        const response = await usersAuthService.logUser(userName, password);

        const { status, ...data} = response
        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).send(err.message)
    }
}
export const regUser = async (req, res) => {
    try {

        const userData = req.body;
        const response = await usersAuthService.regUser(userData);

        const { status, ...data} = response
        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).send(err.message)
    }
}
export const updatePassword = async (req, res) => {
    try {

        const {userID} = req.params;
        const{updatedPassword}=req.body;
       if(!userID || !updatedPassword){
        throw {status:400 ,message:"Invalid user name / password"}
       }
        const response = await usersAuthService.updatePassword(userID, updatedPassword);

        const { status, ...data } = response
        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).send(err.message)
    }
}
export const resetPassword = async (req, res) => {
    try {

        const {userName} = req.body;
       if(!userName){
        throw {status:400, message:"Invalid username"}
       }
        const response = await usersAuthService.resetPassword(userName);

        const { status, ...data } = response
        res.status(status).json(data)

    } catch (err) {

        res.status(err.status || 500).send(err.message)
    }
}
