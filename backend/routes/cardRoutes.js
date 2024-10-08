import express from 'express';
import { createCard, getAllCards, getCardById, updateCard, deleteCard } from '../controllers/cardController.js';

const router = express.Router();

router.post('/cards', createCard);

router.get('/cards', getAllCards);

router.get('/cards/:id', getCardById);

router.put('/cards/:id', updateCard);

router.delete('/cards/:id', deleteCard);

export default router;
