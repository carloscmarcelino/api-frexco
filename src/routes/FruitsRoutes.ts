import { Router } from 'express';
import FruitsController from '../controllers/FruitsController';

const router = Router();

router.get('/allFruits', FruitsController.getAllFruits);
router.post('/fruit/:name', FruitsController.getFruits);

export default router;
