const Pedido = require("../models/pedido")

async function listar(queryParams) {
    return await Pedido.findAll({where: queryParams})
}

async function criar(dados) {
    // const queryInterface = database.getQueryInterface();
    // await queryInterface.removeConstraint("pedidos", "pedidos_cliente_id_fkey")
    // await queryInterface.removeConstraint("pedidos", "pedidos_prato_id_fkey")
    // await queryInterface.addConstraint('pedidos', {
    //     fields: ['cliente_id'],
    //     type: 'foreign key',
    //     name: 'pedidos_cliente_id_fkey',
    //     references: {
    //         table: 'clientes',
    //         field: 'id'
    //     },
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // await queryInterface.addConstraint('pedidos', {
    //     fields: ['prato_id'],
    //     type: 'foreign key',
    //     name: 'pedidos_prato_id_fkey',
    //     references: {
    //         table: 'pratos',
    //         field: 'id'
    //     },
    // })
    return await Pedido.create(dados)
}

async function atualizar(pedidoId, dados) {
    const pedido = await Pedido.findByPk(pedidoId)

    if(pedido){
        pedido.cliente_id = dados.cliente_id ?? pedido.cliente_id
        pedido.prato_id = dados.prato_id ?? pedido.prato_id
        await pedido.save()
    }

    return pedido
}

async function deletar(pedidoId) {
    const pedido = await Pedido.findByPk(pedidoId)
    if(pedido) await pedido.destroy()

    return pedido
}

module.exports = {listar, criar, atualizar, deletar}