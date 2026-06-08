import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from "../../dal/database/db.js";


export const Worker = sequelize.define('Worker', {
    WorkerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    WorkerName: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    WorkerRole: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    WorkerSalary: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
},
{
        tableName: "Workers",
        timestamps: false
    }
);
