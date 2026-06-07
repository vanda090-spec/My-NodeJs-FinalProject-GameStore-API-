import {gameDal} from "../../dal/games/games.dal.js";

export const getAllGamesService =async ()=>{
    const gameList= await gameDal.getAllGames();
    if(!gameList || gameList.length==0) {
        throw {status:404,message:"No games found"};
    }
    return {status:200,games:gameList};
}

export const getGamesByIDService=async (gameID)=>{
    const gameId= await gameDal.getGamesByID(gameID);
    if(!gameId)  {
        throw {status:400,message:"Invalid game id"};
    }
    return {status:200,message:"Game found",gameID:gameId};
}

export const postNewGameService = async (gamesData)=>{
    const gameData=await gameDal.postNewGame(gamesData);
    if(!gameData){
        throw {status:400,message:"Failed to add new game"};
    }
    return {status:201,message:"New game has been created",newGame:gameData};
}

export const updateGameService=async (gameID,gameData)=>{
    const gameId=await gameDal.getGamesByID(gameID);
    if(!gameId){
        throw {status:400,message:"Invalid game id"};
    }
    const updatedGame=await gameDal.updateGame(gameID,gameData);
    return {status:200,message:"Games has been updated",game:updatedGame};
}

export const deleteGameByIDService= async (gameID,gamesData)=>{
    const gameId=await gameDal.getGamesByID(gameID);
    if(!gameId){
        throw {status:400,message:"Failed to delete game"};
    }
    const deletedGames=gameDal.deleteGameByID(gameID);
    return {status:200,message:"Game has been deleted "};
}