import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../dal/database/db';

export const Order = sequelize.define('Order', {
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    GameID: {
        type: DataTypes.INTEGER,
        allowNull: true,

    },
    OrderCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    OrderDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    WorkerID:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
        tableName: "Orders",
        timestamps: false
    }
);
