import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    email: {
        type: DataTypes.STRING
    },
    
}, {
    freezeTableName: true
});

export default User;