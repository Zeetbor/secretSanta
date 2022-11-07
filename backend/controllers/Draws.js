import Draw from '../models/drawModel.js';

export const getAllDraws = async (req, res) => {
    try {
        const Draws = await Draw.findAll();
        res.json(Draws)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getDrawById = async (req, res) => {
    try {
        const Draws = await Draw.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Draws[0]);
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const createDraw = async (req, res) => {
    try {
        await Draw.create(req.body);
        res.json({
            "message": "Draw Created"
        });
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const updateDraw = async (req, res) => {
    try {
        await Draw.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Draw Updated"
        });
    } catch (error) {
        res.json({ message: error.message});
    }
}

export const deleteDraw = async (req, res) => {
    try {
        await Draw.destroy({
            where: {
                id: req.params.body
            }
        });
        res.json({
            "message": "Draw Deleted"
        });
    } catch (error) {
        res.json({ message: error.message})
    }
}