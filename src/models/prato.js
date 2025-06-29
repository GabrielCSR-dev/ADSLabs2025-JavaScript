const database = require("../database/database")
const Sequelize = require("sequelize")


const Prato = database.define("pratos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    }    
},  {
    timestamps: true
})

module.exports = Prato