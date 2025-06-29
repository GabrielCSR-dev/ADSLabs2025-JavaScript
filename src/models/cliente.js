const database = require("../database/database")
const Sequelize = require("sequelize")


const Cliente = database.define("clientes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
},  {
    timestamps: true
})

module.exports = Cliente