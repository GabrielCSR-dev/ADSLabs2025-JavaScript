const clienteService = require('../services/clienteService')

function listar(req, res){
    clienteService.listar(req.query)
        .then((clientes) => {
                return res.send({ dados: clientes })
            },
            (erro) => {
                return res.status(500).send({ erro: erro })
            })
}

function criar(req, res) {
    clienteService.criar(req.body)
        .then((novoCliente) => {
            return res.status(201).send({
                message: "Novo cliente criado com sucesso!",
                cliente: novoCliente
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function atualizar(req, res) {
    clienteService.atualizar(req.params.id, req.body)
        .then((clienteEditado) => {
            console.log(clienteEditado)
            if(!clienteEditado)
                return res.send({ message: "Cliente não foi encontrado"})

            return res.send({
                message: "Cliente editado com sucesso!",
                cliente: clienteEditado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function deletar(req, res) {
    clienteService.deletar(req.params.id)
        .then((clienteDeletado) => {
            if(!clienteDeletado)
                return res.send({ message: "Cliente não foi encontrado"})

            return res.send({
                message: "Cliente removido com sucesso!",
                cliente: clienteDeletado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function listarMaisPediram(req, res){
    clienteService.listarMaisPediram()
        .then((clientes) => {
                return res.send({ dados: clientes })
            },
            (erro) => {
                return res.status(500).send({ erro: erro })
            })
}

function listarMaisGastaram(req, res){
    clienteService.listarMaisGastaram()
        .then((clientes) => {
                return res.send({ dados: clientes })
            },
            (erro) => {
                return res.status(500).send({ erro: erro })
            })
}

module.exports = { listar, criar, atualizar, deletar, listarMaisPediram, listarMaisGastaram }