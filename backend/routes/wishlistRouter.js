import express from "express"

import {
    getAllWishlists, getWishlistByUserId,

} from "../controllers/Wishlist.js"

const wishlistRouter = express.Router();

wishlistRouter.get('/', getAllWishlists);
wishlistRouter.get('/user/:userId', getWishlistByUserId)


export default wishlistRouter