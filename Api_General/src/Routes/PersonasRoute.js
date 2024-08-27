const express = require("express");
const router = express.Router();
const ObtenerTodasLasPersonas = require("../Controllers/PersonasController");

router
    .get ("/ObtenerTodasLasPersonas", ObtenerTodasLasPersonas.ObtenerTodasLasPersonas)

module.exports = router;

