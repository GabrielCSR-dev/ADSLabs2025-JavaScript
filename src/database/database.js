const { Sequelize } = require("sequelize")

const database = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST
    }
)

module.exports = database

require("../models/cliente")
require("../models/prato")
require("../models/pedido")

database.sync()