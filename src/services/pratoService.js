const Prato = require("../models/prato")
const sqlite = require("node:sqlite");
const sequelize = require("../database/database")
const { QueryTypes } = require('sequelize');

async function listar(queryParams) {
    return await Prato.findAll({where: queryParams})
}

async function criar(dados) {
    return await Prato.create(dados)
}

async function atualizar(pratoId, dados) {
    const prato = await Prato.findByPk(pratoId)

    if(prato){
        prato.nome = dados.nome ?? prato.nome
        prato.preco = dados.preco ?? prato.preco
        await prato.save()
    }

    return prato
}

async function deletar(pratoId) {
    const prato = await Prato.findByPk(pratoId)
    if(prato) await prato.destroy()

    return prato
}

async function listarMaisPedidos() {
    const query = `
    SELECT pratos.id, pratos.nome, pratos.preco, count(pedidos.id) AS qtd_pedidos
    FROM pratos 
    LEFT JOIN pedidos 
      ON pratos.id = pedidos.prato_id
    GROUP BY pratos.id 
    ORDER BY count(pedidos.id) DESC
  `;
    return await sequelize.query(query, { type: QueryTypes.SELECT })
}

module.exports = {listar, criar, atualizar, deletar, listarMaisPedidos}