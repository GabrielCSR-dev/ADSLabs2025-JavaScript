const express = require("express")
const controller = require("../controllers/pratoController")
const middlewares = require("../middlewares/middlewares")

const router = express.Router()

router.get("/", controller.listar)
router.post("/", middlewares.validaNomePrato, controller.criar)
router.put("/:id", middlewares.validaNomePrato, controller.atualizar)
router.delete("/:id", controller.deletar)

router.get("/maispedidos", controller.listarMaisPedidos)
module.exports = router