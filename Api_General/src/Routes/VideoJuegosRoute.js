const express = require ("express");
const router = express.Router();
const ControladorVideoJuegos = require("../Controllers/VideoJuegosController")

router
    .get("/ObtenerTodosLosVideoJuegos", ControladorVideoJuegos.ObtenerTodosLosVideoJuegos)
    .post("/VerificarDisponibilidadJuego", ControladorVideoJuegos.ValidarDisponibilidad)

module.exports = router;