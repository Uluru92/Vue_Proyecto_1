const express = require ("express");
const router = express.Router();
const ObtenerTodosLosVideoJuegos = require("../Controllers/VideoJuegosController")

router
    .get("/ObtenerTodosLosVideoJuegos", ObtenerTodosLosVideoJuegos.ObtenerTodosLosVideoJuegos)

module.exports = router;