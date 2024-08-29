const express = require ("express");
const router = express.Router();
const ObtenerTodasLasConsolas = require("../Controllers/ConsolasController")

router
    .get("/ObtenerTodasLasConsolas", ObtenerTodasLasConsolas.ObtenerTodasLasConsolas)

module.exports = router;