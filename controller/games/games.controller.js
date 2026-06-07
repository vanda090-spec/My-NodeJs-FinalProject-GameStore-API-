import { getAllGamesService, getGamesByIDService, postNewGameService, updateGameService, deleteGameByIDService } from "../../services/games/games.service.js";

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

export const getGamesByID = async (req, res) => {
    try {
        const {gameID}  = req.params

        const response = await getGamesByIDService(gameID);

        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const postNewGame = async (req, res) => {
    try {
        const  gamesData  = req.body;

        const response = await postNewGameService(gamesData);

        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const updateGame = async (req, res) => {
    try {
        const {gameID} = req.params;
        const gameData = req.body;

        const response = await updateGameService(gameID, gameData);
        const { status, ...data } = response;

        res.status(status).json(data);

    } catch (err) {
        res.status(err.status || 500).json(err.message);
    }
}

export const  deleteGameByID= async(req,res)=>{
    try{
        const {gameID}=req.params;
     const response = await deleteGameByIDService(gameID);
     const {status,...data}=response;
     
     res.status(status).json(data);
    }catch(err){
        res.status(err.status || 500).json(err.message)
    }
}