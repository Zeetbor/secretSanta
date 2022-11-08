import express from "express";
import db from "./config/database.js";
import userRouter from "./routes/userRouter.js";
import drawRouter from "./routes/drawRouter.js"
import wishlistRouter from "./routes/wishlistRouter.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/users', userRouter);
app.use('/draws', drawRouter);
app.use('/wishlist', wishlistRouter)

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server running at port ${PORT}`));