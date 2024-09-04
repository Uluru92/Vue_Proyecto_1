const SolicitudesBD = require("../DataBase/SolicitudesBD");

const GuardarSolicitud = (req, res) => {
    const NuevaSolicitud = req.body;
    SolicitudesBD.GuardarSolicitud(NuevaSolicitud);
    res.send("Hola esta es una nueva solicitud")


}

module.exports = {
    GuardarSolicitud
}