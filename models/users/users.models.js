import { sequelize } from "../../dal/database/db.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    UserPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserCountry: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
