const { Router } = require ("express");
const router = Router();
const { ObtenerTodasLasConsolas } = require("../Controllers/ConsolasController")

router.get("/ObtenerTodasLasConsolas", ObtenerTodasLasConsolas)

module.exports = router;