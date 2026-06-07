import {Worker} from "../../models/workers/workers.model.js";
export const gameDal = {
   getAllGames: () => Worker.findAll(),

   getGamesByID: (gameID) => Worker.findByPk(gameID),

    postNewGame: (gameData) => Worker.create(gameData),

    updateGame: async (gameID, gameData) => {
        await Worker.update(gameData, {
            where:
            {
                GameID: gameID
            }
        });
        return Worker.findByPk(gameID);
    },

    deleteGameByID: (gameID) => {
        return Worker.destroy({
            where:
            {
                GameID: gameID
            }
        });
    }
};