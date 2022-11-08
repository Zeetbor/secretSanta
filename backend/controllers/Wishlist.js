import Wishlist from "../models/wishlistModel.js";

export const getAllWishlists = async (req, res) => {
    try {
        const Wishlists = await Wishlist.findAll();
        res.json(Wishlists)
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const getWishlistByUserId = async (req, res) => {
    try {
        const Wishlists = await Wishlist.findAll({
            where: {
                userId: req.params.userId
            }
        });
        res.json(Wishlists)
    }
    catch (error) {
        res.json({message: error.message})
    }
}

export const updateWishlistById = async (req, res) => {
    try {
        await Wishlist.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Wishlist Updated"
        });
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteWishlist = async (req, res) => {
    try {
        
    }
    catch (error) {
        
    }
}