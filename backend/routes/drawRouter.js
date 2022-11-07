import express from "express";

import {
    getAllDraws,
    createDraw,
    getDrawById,
    updateDraw,
    deleteDraw
} from '../controllers/Draws.js'

const drawRouter = express.Router();

drawRouter.get('/', getAllDraws);
drawRouter.post('/', createDraw);
drawRouter.get('/:id', getDrawById);
drawRouter.patch('/:id', updateDraw);
drawRouter.delete('/:id', deleteDraw);

export default drawRouter;