const express = require("express");
const router = express.Router();
const SolicitudesController = require("../Controllers/SolicitudesController")

router
    .post("/RegistrarNuevaSolicitud", SolicitudesController.GuardarSolicitud)


module.exports = router;