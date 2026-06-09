import {Router} from 'express';
import {getAllGames,getGamesByID,postNewGame,updateGame,deleteGameByID} from "../../controller/games/games.controller.js";
import { getLiveGames,gamesByCategory,latestNews } from "../../controller/games/games.controller.js"
import {validateToken} from "../../middleware/validateToken.js";
export const router=Router();

router.get('/', getAllGames);
router.get('/gamesInfo/live',getLiveGames);
router.get('/gamesInfo/category',gamesByCategory);
router.get('/gamesInfo/news',latestNews);
router.get('/:gameID',validateToken,getGamesByID);

router.post('/',postNewGame);

router.put('/:gameID',validateToken,updateGame);

router.delete('/:gameID',validateToken,deleteGameByID);


export default router;