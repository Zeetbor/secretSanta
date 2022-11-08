import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize;

const Wishlist = db.define('wishlist', {
    userId: {
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING(100)
    },
    hyperlink: {
        type: DataTypes.STRING(150)
    }
}, {
    freezeTableName: true
})

export default Wishlist;
