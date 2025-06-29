const pratoService = require('../services/pratoService')

function listar(req, res){
    pratoService.listar(req.query)
        .then((pratos) => {
                return res.send({ dados: pratos })
            },
            (erro) => {
                return res.status(500).send({ erro: erro })
            })
}

function criar(req, res) {
    pratoService.criar(req.body)
        .then((novoPrato) => {
            return res.status(201).send({
                message: "Novo prato criado com sucesso!",
                prato: novoPrato
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function atualizar(req, res) {
    pratoService.atualizar(req.params.id, req.body)
        .then((pratoEditado) => {
            console.log(pratoEditado)
            if(!pratoEditado)
                return res.send({ message: "Prato não foi encontrado"})

            return res.send({
                message: "Prato editado com sucesso!",
                prato: pratoEditado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function deletar(req, res) {
    pratoService.deletar(req.params.id)
        .then((pratoDeletado) => {
            if(!pratoDeletado)
                return res.send({ message: "Prato não foi encontrado"})

            return res.send({
                message: "Prato removido com sucesso!",
                prato: pratoDeletado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function listarMaisPedidos(req, res){
    pratoService.listarMaisPedidos()
        .then((pratos) => {
                return res.send({ dados: pratos })
            },
            (erro) => {
                return res.status(500).send({ erro: erro })
            })
}

module.exports = { listar, criar, atualizar, deletar, listarMaisPedidos }