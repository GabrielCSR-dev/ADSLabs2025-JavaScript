const express = require("express")
const controller = require("../controllers/clienteController")
const middlewares = require("../middlewares/middlewares")

const router = express.Router()

router.get("/", controller.listar)
router.post("/", middlewares.validaCPFCliente, controller.criar)
router.put("/:id", middlewares.validaCPFCliente, controller.atualizar)
router.delete("/:id", controller.deletar)

router.get("/maispediram", controller.listarMaisPediram)
router.get("/maisgastaram", controller.listarMaisGastaram)

module.exports = router