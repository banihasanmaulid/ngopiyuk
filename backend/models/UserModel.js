import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes: {STRING}} = Sequelize;
// DataTypes.STRING = "undefined";

const User = db.define('users', {
    name: STRING,
    email: STRING,
    gender: STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();