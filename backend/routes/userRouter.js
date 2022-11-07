import express from "express";

import {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/Users.js";

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;