import {Router} from 'express';
import {getAllGames,getGamesByID,postNewGame,updateGame,deleteGameByID} from "../../controller/games/games.controller.js";
import { getLiveGames,gamesByCategory,latestNews } from "../../controller/games/games.controller.js"
import {validateToken} from "../../middleware/validateToken.js";
export const router=Router();

router.get('/',validateToken,getAllGames);
router.get('/gamesInfo/live',validateToken,getLiveGames);
router.get('/gamesInfo/category',validateToken,gamesByCategory);
router.get('/gamesInfo/news',validateToken,latestNews);
router.get('/:gameID',validateToken,getGamesByID);

router.post('/',validateToken,postNewGame);

router.put('/:gameID',validateToken,updateGame);

router.delete('/:gameID',validateToken,deleteGameByID);


export default router;