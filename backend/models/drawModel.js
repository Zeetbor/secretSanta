import { Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize;

const Draw = db.define('draws', {
    name: {
        type: DataTypes.STRING
    },
    drawDate: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true
});

export default Draw;