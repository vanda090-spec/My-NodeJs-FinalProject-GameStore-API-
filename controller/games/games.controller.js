import { getAllGamesService, getGamesByIDService, postNewGameService, updateGameService, deleteGameByIDService } from "../../services/games/games.service.js";
import {getLiveGamesService,gamesByPlatformService,gamesByCategoryService,gamesByReleaseDateService,gamesByFilterService ,gamesByDetailsService,liveGiveawaysService, latestNewsService} from '../../services/games/games.externalApi.service.js';

export const getAllGames = async (req, res) => {
    try {
        const response = await getAllGamesService();

        const { status, ...data } = response;

        res.status(status).json(data);

    }
    catch (err) {

        res.status(err.status || 500).json(err.message);
    }
}

export const getLiveGames = async (req, res) => {
    try {
        const api = "https://www.mmobomb.com/api1/games";
        const response = await getLiveGamesService(api);

        const { status, ...data } = response;
        res.status(status).json(data)
    }
    catch (err) {
        res.status(err.status || 500).json(err.message)
    }
}

export const gamesByPlatform = async (req, res) => {
    try {
        const api = "https://www.mmobomb.com/api1/games?platform=windows"
        const response = await gamesByPlatformService(api);

        const { status, ...data } = response;
        res.status(status).json(data);
    }
    catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const gamesByCategory = async (req, res) => {

    try {
        const api = " https://www.mmobomb.com/api1/games?category=shooter";
        const response = await gamesByCategoryService(api);

        const { status, ...data } = response;
        res.status(status).json(data);
    }
    catch (err) {
        res.status(err.status || 500).json(err.message);
    }

}

export const gamesByReleaseDate=async(req,res)=>{
 try{
    const api="https://www.mmobomb.com/api1/games?sort-by=alphabetical";
    const response = await gamesByReleaseDateService(api);

    const {status,...data}=response;
    res.status(status).json(data);
 }
 catch(err){
    res.status(err.status||500).json(err.message);
 }
}

export const gamesByFilter = async (req, res) => {
    try {
        const api = " https://www.mmobomb.com/api1/filter?tag=3d.mmorpg.fantasy.pvp&platform=windows"
        const response = await gamesByFilterService(api);

        const { status, ...data } = response;
        res.status(status).json(data);
    }
    catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const gamesByDetails=async (req,res)=>{
    try{
        const api="https://www.mmobomb.com/api1/game?id=452";
        const response = await gamesByDetailsService(api);

        const {status,...data}=response;
        res.status(status).json(data);
    }
    catch(err){
        res.status(err.status || 500).json(err.message);
    }
}

export const liveGiveaways=async (req,res) =>{
    try{
        const api="https://www.mmobomb.com/api1/giveaways";
        const response=await liveGiveawaysService(api);

        const {status,...data}=response;
        res.status(status).json(data);
    }
    catch(err){
        res.status(err.status || 500).json(err.message);
    }
}

export const latestNews=async (req,res)=>{
    try {
        const api="https://www.mmobomb.com/api1/latestnews";
        const response = await latestNewsService(api);

        const {status,...data}=response;
        res.status(status).json(data);
    }
    catch(err){
        res.status(err.status || 500).json(err.message);
    }
}

export const getGamesByID = async (req, res) => {
    try {
        const { gameID } = req.params

        const response = await getGamesByIDService(gameID);

        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const postNewGame = async (req, res) => {
    try {
        const gamesData = req.body;

        const response = await postNewGameService(gamesData);

        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const updateGame = async (req, res) => {
    try {
        const { gameID } = req.params;
        const gameData = req.body;

        const response = await updateGameService(gameID, gameData);
        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const deleteGameByID = async (req, res) => {
    try {
        const { gameID } = req.params;
        const response = await deleteGameByIDService(gameID);
        const { status, ...data } = response;

        res.status(status).json(data);
    } catch (err) {
        res.status(err.status || 500).json(err.message)
    }
}