const express = require("express")
const controller = require("../controllers/pedidoController")
const middlewares = require("../middlewares/middlewares")

const router = express.Router()

router.get("/", controller.listar)
router.post("/", controller.criar)
router.put("/:id", controller.atualizar)
router.delete("/:id", controller.deletar)

module.exports = router