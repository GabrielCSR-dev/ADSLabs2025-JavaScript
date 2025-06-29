const database = require("../database/database")
const Sequelize = require("sequelize")

const Prato = require("./prato")
const Cliente = require("./cliente")

const Pedido = database.define("pedidos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente_id: {
        type: Sequelize.INTEGER,

        references: {
            model: Cliente,
            key: "id"
        },
        onDelete: 'CASCADE',
        allowNull: false
    },
    prato_id: {
        type: Sequelize.INTEGER,

        references: {
            model: Prato,
            key: "id",
        },
        onDelete: 'CASCADE',
        allowNull: false
    }
},{
    timestamps: true
})

module.exports = Pedido