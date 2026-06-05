import { User } from "../../models/users/users.models.js";


export const userDal = {
    getUsers: () => User.findAll(),

    getUserById: (UserID) => User.findByPk(UserID),

    getUserByEmail: (Email) => {
        return User.findOne({ where: { email } });
    },

    getUserByName: (UserName) => {
        return User.findOne({ where: { name } });
    },

    registerUser: (UserData) => User.create(userData),

    updateUser: async (UserID, UserData) => {
        await User.update(UserData, { where: { id } });
        return User.findByPk(id);
    },

    deleteUser: (UserID) => {
        return User.destroy({ where: { id } });
    },

    usersCount: () => {
        return User.count();
    }
};