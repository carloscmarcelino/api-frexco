import { Router } from 'express';
import Controller from '../controllers/Controller';

const router = Router();

router.get('/', Controller.getFruits);
router.get('/:name', Controller.getFruit);

export default router;
