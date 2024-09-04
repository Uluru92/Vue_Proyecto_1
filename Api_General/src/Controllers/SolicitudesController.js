const SolicitudesBD = require("../DataBase/SolicitudesBD");

const ObtenerTodasLasSolicitudes = (req, res) => {
    const TodasLasSolicitudes = SolicitudesBD.ObtenerTodasLasSolicitudes();
    res.send({ DetalleRespuesta: TodasLasSolicitudes })
}

const GuardarSolicitud = (req, res) =>
{
    const NuevaSolicitud = req.body;
    const TodasLasSolicitudes = SolicitudesBD.ObtenerTodasLasSolicitudes();
    const existeSolicitud = TodasLasSolicitudes.some(x => x.NumeroTelefono === NuevaSolicitud.NumeroTelefono
        || x.CorreoElectronico === NuevaSolicitud.CorreoElectronico)

    let codigoSolicitud = 98;
    let descripcionSolicitud = "Solicitud ya existe";

    if (!existeSolicitud)
    {
        SolicitudesBD.GuardarSolicitud(NuevaSolicitud) 
        codigoSolicitud = 0;
        descripcionSolicitud = "Solicitud registrada"
    }

    const DetalleSolicitud =
    {
        Codigo: codigoSolicitud,
        Descripcion: descripcionSolicitud
    }

    res.send(DetalleSolicitud)
}

module.exports = {
    ObtenerTodasLasSolicitudes,
    GuardarSolicitud
}