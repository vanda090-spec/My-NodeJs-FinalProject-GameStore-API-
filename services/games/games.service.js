import { gameDal } from "../../dal/games/games.dal.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger('Games:')

export const getAllGamesService = async () => {
    const gameList = await gameDal.getAllGames();
    if (!gameList || gameList.length == 0) {
        const msg = "No games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${gameList.length} games`;
    logger.info(msg);
    return { status: 200, games:gameList };
}

export const getGamesByIDService = async (gameID) => {
    const gameId = await gameDal.getGamesByID(gameID);
    if (!gameId) {
        const msg = `Game ${gameID} not found`
        logger.warn(msg)
        throw { status: 404, message: msg };
    }
    const msg = `Game ${gameID} found`
    logger.info(msg)
    return { status: 200, message: msg, gameId };
}

export const postNewGameService = async (gamesData) => {
    const gameData = await gameDal.postNewGame(gamesData);
    if (!gameData) {
        const msg = `Failed to add new game`;
        logger.error(msg)
        throw { status: 400, message: "Failed to add new game" };
    }
    const msg = `Added new game ${gameData.GameID}`
    logger.info(msg)
    return { status: 201, message: msg, gameData };
}

export const updateGameService = async (gameID, gameData) => {
    const gameId = await gameDal.getGamesByID(gameID);
    if (!gameId) {
        const msg = `Game not found`;
        logger.warn(msg)
        throw { status: 404, message: msg };
    }
    const updatedGame = await gameDal.updateGame(gameID, gameData);
    const msg = `Game ${gameID} data has been updated`;
    logger.info(msg);
    return { status: 200, message: msg, updatedGame };
}

export const deleteGameByIDService = async (gameID) => {
    const gameId = await gameDal.getGamesByID(gameID);
    if (!gameId) {
        const msg = `Game ${gameID} not found`;
        logger.warn(msg)
        throw { status: 404, message: msg };
    }
    await gameDal.deleteGameByID(gameID);
    const msg = `Game ${gameID} has been deleted`;
    logger.info(msg);
    return { status: 200, message:msg };
}