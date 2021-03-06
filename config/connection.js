const { setWith } = require('lodash');
const Sequilize = require('sequelize');
require('dotenv').config();
let sequelize;
if (process.env,JAWSDB_URL){
    sequelize - new Sequilize(process.env.JAWSDB_URL);
}
else
{
    sequelize = new Sequilize(process.send.BD_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'myswl',
        port: 3306
    });
}
module.exports = sequelize;