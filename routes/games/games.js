import {Router} from 'express';
export const router=Router();

router.get('/', getAllGames);
router.get('/:workerID', getGamesByID);

router.post('/',postNewGame);

router.put('/:workerID', updateGame);

router.delete('/:workerID', deleteGameByID);


export default router;