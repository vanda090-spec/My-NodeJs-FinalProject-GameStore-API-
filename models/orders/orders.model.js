import { DataTypes } from 'sequelize';
import { sequelize } from '../../dal/database/db.js';

export const Order = sequelize.define('Order', {
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    userID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"UserID"
        
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
