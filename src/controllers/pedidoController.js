const pedidoService = require('../services/pedidoService')

function listar(req, res){
    pedidoService.listar(req.query)
        .then((pedidos) => {
                return res.send({ dados: pedidos })
            },
            (erro) => {
                return res.status(500).send({ erro: erro })
            })
}

function criar(req, res) {
    pedidoService.criar(req.body)
        .then((novoPedido) => {
            return res.status(201).send({
                message: "Novo pedido criado com sucesso!",
                pedido: novoPedido
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function atualizar(req, res) {
    pedidoService.atualizar(req.params.id, req.body)
        .then((pedidoEditado) => {
            console.log(pedidoEditado)
            if(!pedidoEditado)
                return res.send({ message: "Pedido não foi encontrado"})

            return res.send({
                message: "Pedido editado com sucesso!",
                pedido: pedidoEditado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function deletar(req, res) {
    pedidoService.deletar(req.params.id)
        .then((pedidoDeletado) => {
            if(!pedidoDeletado)
                return res.send({ message: "Pedido não foi encontrado"})

            return res.send({
                message: "Pedido removido com sucesso!",
                pedido: pedidoDeletado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

module.exports = { listar, criar, atualizar, deletar }