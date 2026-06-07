import {Router} from 'express';
import {getAllGames,getGamesByID,postNewGame,updateGame,deleteGameByID} from "../../controller/games/games.controller.js";
export const router=Router();

router.get('/', getAllGames);
router.get('/:gameID', getGamesByID);

router.post('/',postNewGame);

router.put('/:gameID', updateGame);

router.delete('/:gameID', deleteGameByID);


export default router;