const Cliente = require("../models/cliente")
const sequelize = require("../database/database");
const {QueryTypes} = require("sequelize");

async function listar(queryParams) {
    return await Cliente.findAll({where: queryParams})
}

async function criar(dados) {
    return await Cliente.create(dados)
}

async function atualizar(clienteId, dados) {
    const cliente = await Cliente.findByPk(clienteId)

    if(cliente){
        cliente.nome = dados.nome ?? cliente.nome
        cliente.cpf = dados.cpf ?? cliente.cpf
        await cliente.save()
    }

    return cliente
}

async function deletar(clienteId) {
    const cliente = await Cliente.findByPk(clienteId)
    if(cliente) await cliente.destroy()

    return cliente
}

async function listarMaisPediram() {
    const query = `
    SELECT clientes.id, clientes.nome, count(pedidos.id) AS qtd_pedidos
    FROM clientes
    INNER JOIN pedidos 
      ON clientes.id = pedidos.cliente_id
    GROUP BY clientes.id 
    ORDER BY count(pedidos.id) DESC
    LIMIT 5
  `;
    return await sequelize.query(query, { type: QueryTypes.SELECT })
}

async function listarMaisGastaram() {
    const query = `
    SELECT clientes.id, clientes.nome, sum(pratos.preco) AS total_gasto
    FROM clientes 
    INNER JOIN pedidos 
      ON clientes.id = pedidos.cliente_id
    INNER JOIN pratos 
      ON pratos.id = pedidos.prato_id
    GROUP BY clientes.id 
    ORDER BY sum(pratos.preco) DESC
    LIMIT 5
  `;
    return await sequelize.query(query, { type: QueryTypes.SELECT })
}

module.exports = {listar, criar, atualizar, deletar, listarMaisPediram, listarMaisGastaram}