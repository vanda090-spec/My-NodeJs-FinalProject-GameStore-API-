import {default as axios} from 'axios';
import {liveAPI,platformAPI,categoryAPI,releaseAPI,byPlatformCategoryAPI,filterAPI,detailsAPI,giveawayAPI,latestAPI} from "../../models/externalAPI/externalAPI.model.js";


export const getLiveGamesService=async()=>{
    const game=await liveAPI.get();
    if(!game){
        throw {status:404,message:"Object not found"};
    }
    return {
        status:200,
        games:game.data
    }
}

export const gamesByPlatformService=async()=>{
    const game =await platformAPI.get();
    if(!game){
        throw{status:404,message:"Object not found"};
    }
    return {status:200,games:game.data}
}

export const gamesByCategoryService=async()=>{
    const game =await categoryAPI.get();
    if(!game){
           throw{status:404,message:"Object not found"};
    }
     return {status:200,games:game.data}
}

export const gamesByReleaseDateService=async()=>{
    const game=await releaseAPI.get();
    if(!game){
           throw{status:404,message:"Object not found"};
    }
     return {status:200,games:game.data}
}

export const gamesByFilterService=async()=>{
    const game=await filterAPI.get();
    if(!game){
           throw{status:404,message:"Object not found"};
    }
     return {status:200,games:game.data}
}

export const gamesByDetailsService=async()=>{
    const game=await detailsAPI.get();
    if(!game){
           throw{status:404,message:"Object not found"};
    }
     return {status:200,games:game.data}
}

export const liveGiveawaysService=async()=>{
    const game=await  giveawayAPI.get();
    if(!game){
           throw{status:404,message:"Object not found"};
    }
     return {status:200,games:game.data}
}

export const latestNewsService=async()=>{
    const game=await latestAPI.get();
    if(!game){
           throw{status:404,message:"Object not found"};
    }
     return {status:200,games:game.data}
}



