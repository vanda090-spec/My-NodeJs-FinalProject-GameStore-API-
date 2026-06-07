import {Games} from "../../models/games/games.model.js";
export const gameDal = {
   getAllGames: () => Games.findAll(),

   getGamesByID: (gameID) => Games.findByPk(gameID),

    postNewGame: (gameData) => Games.create(gameData),

    updateGame: async (gameID, gameData) => {
        await Games.update(gameData, {
            where:
            {
                GameID: gameID
            }
        });
        return Games.findByPk(gameID);
    },

    deleteGameByID: (gameID) => {
        return Games.destroy({
            where:
            {
                GameID: gameID
            }
        });
    }
};