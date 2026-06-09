import { User } from "../../models/users/users.models.js";


export const userDal = {
    getUsers: () => User.findAll(),

    getUserById: (userID) => User.findByPk(userID),

    getUserByEmail: (email) => {
        return User.findOne({ where: { userEmail:email } });
    },

    getUserByName: (userName) => {
        return User.findOne({ where: { userName:userName } });
    },

    registerUser: (userData) => User.create(userData),

    updateUser: async (userID, userData) => {
        await User.update(userData.userID, { where: { userID:userID } });
        return User.findByPk(userID);
    },

    deleteUser: (userID) => {
        return User.destroy({ where: { userID:userID } });
    },

    usersCount: () => {
        return User.count();
    }
};