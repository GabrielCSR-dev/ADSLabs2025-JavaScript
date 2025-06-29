
function validaCPFCliente(req, res, next){
    if(req.body.cpf == null) return next()
    if(req.body.cpf.length === 11){
        let resultado = 0
        for(let i = 10, j = 0; i >= 2; i--, j++) {
            resultado += parseInt(req.body.cpf[j]) * i
        }
        let primeiroDigito = (resultado * 10) % 11
        if(primeiroDigito === 10) primeiroDigito = 0

        if(primeiroDigito === parseInt(req.body.cpf[9])){
            resultado = 0
            for(let i = 11, j = 0; i >= 3; i--, j++) {
                resultado += parseInt(req.body.cpf[j]) * i
            }
            resultado += primeiroDigito * 2

            let segundoDigito = (resultado * 10) % 11
            if(segundoDigito === 10) segundoDigito = 0

            if(segundoDigito === parseInt(req.body.cpf[10])) return next()
        }
    }
    return res.status(400).send({ message: `${req.body.cpf} não é um cpf válido.`})
}

function validaNomePrato(req, res, next){
    if(req.body.nome == null) return next()
    if(/^\p{Letter}+$/u.test(req.body.nome)){
        if(req.body.nome.length >= 3 && req.body.nome.length <= 50) return next()
    }
    return res.status(400).send({ message: `${req.body.nome} nome do prato inválido.`})
}


module.exports = { validaCPFCliente, validaNomePrato }