require("dotenv").config({ path: "../.env"})
require("./database/database")
const express = require("express");
const clienteRouter = require("./routes/clienteRoutes")
const pratoRouter = require("./routes/pratoRoutes")
const pedidoRouter = require("./routes/pedidoRoutes")

const app = express()
app.use(express.json())

app.use("/api/cliente", clienteRouter)
app.use("/api/prato", pratoRouter)
app.use("/api/pedido", pedidoRouter)

app.listen(process.env.PORT, console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app