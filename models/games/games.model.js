import { DataTypes } from 'sequelize';
import { sequelize } from '../../dal/database/db.js';

export const Games = sequelize.define('Games', {
    GameID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    GameName: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    GamePrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    GameCategory: {
        type: DataTypes.STRING,
        allowNull: true
    },
    GameDateAdded:{
        type:DataTypes.DATE
    }
},
{
        tableName: "Games",
        timestamps: false
    }
);
