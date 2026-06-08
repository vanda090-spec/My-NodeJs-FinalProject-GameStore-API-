import { sequelize } from "../../dal/database/db.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is:/^[a-z]+$/i        
        }

    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[6,100]
        }
    },
    userEmail: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
        validate:{
            isEmail:true
        }
    },
    userPhone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[9,15]
        }
    },
    userCountry: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
             is: /^[a-z]+$/i
        }
    }
},
{
        tableName: "Users",
        timestamps: false
    }
);
