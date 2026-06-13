import { liveAPI, platformAPI, categoryAPI, releaseAPI, filterAPI, detailsAPI, giveawayAPI, latestAPI } from "../../models/externalAPI/externalAPI.model.js";
import { createLogger } from "../../utils/logger.js";

const logger = createLogger('ExternalAPI')

export const getLiveGamesService = async () => {
    const games = await liveAPI.get();
    if (!games) {
        const msg = "No live games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${games.data.length} games`;
    logger.info(msg);
    return {
        status: 200,
        games: games.data
    }
}

export const gamesByPlatformService = async () => {
    const game = await platformAPI.get();
    if (!game) {
        const msg = "No games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${game.data.length} games`;
    logger.info(msg);
    return { status: 200, message: msg, games: game.data }
}

export const gamesByCategoryService = async () => {
    const game = await categoryAPI.get();
    if (!game) {
        const msg = "No games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${game.data.length} games`;
    logger.info(msg);
    return { status: 200, message: msg, games: game.data }
}

export const gamesByReleaseDateService = async () => {
    const game = await releaseAPI.get();
    if (!game) {
        const msg = "No games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${game.data.length} games`;
    logger.info(msg);
    return { status: 200, message: msg, games: game.data }
}

export const gamesByFilterService = async () => {
    const game = await filterAPI.get();
    if (!game) {
        const msg = "No games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${game.data.length} games`;
    logger.info(msg);
    return { status: 200, message: msg, games: game.data }
}

export const gamesByDetailsService = async () => {
    const game = await detailsAPI.get();
    if (!game) {
        const msg = "No games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${game.data.length} games`;
    logger.info(msg);
    return { status: 200, message: msg, games: game.data }
}

export const liveGiveawaysService = async () => {
    const game = await giveawayAPI.get();
    if (!game) {
        const msg = "No games found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${game.data.length} games`;
    logger.info(msg);
    return { status: 200, message: msg, games: game.data }
}

export const latestNewsService = async () => {
    const game = await latestAPI.get();
    if (!game) {
        const msg = "No news article found";
        logger.warn(msg);
        throw { status: 404, message: msg };
    }
    const msg = `Found ${game.data.length} game news article`;
    logger.info(msg);
    return { status: 200, message: msg, games: game.data }
}



