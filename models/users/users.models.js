import { sequelize } from "../../dal/database/db.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:"UserID" 
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"UserName",
        validate:{
            is:/^[a-z]+$/i,
            len:[1,20]        
        }

    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"UserPassword",
        validate:{
            len:[6,100]
        }
    },
    userEmail: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
        field:"UserEmail",
        validate:{
            isEmail:true
        }
    },
    userPhone: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"UserPhone",
        validate:{
            len:[9,15]
        }
    },
    userCountry: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"UserCountry",
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
