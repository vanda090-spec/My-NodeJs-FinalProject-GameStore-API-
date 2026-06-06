import { sequelize } from "../../dal/database/db.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userCountry: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
