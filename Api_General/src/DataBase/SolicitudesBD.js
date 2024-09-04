const path = require('path');
const fs = require('fs');
const db_archivo_directorio = path.join(__dirname, '../DataBase/SolicitudesBD.json')

const GuardarSolicitud = (Solicitud) => {
    try {
        let informacionSolicitudes = require(db_archivo_directorio);
        informacionSolicitudes.SolicitudesRegistradas.push(Solicitud);
        fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionSolicitudes, null, 2))
    }
    catch (error) {
        return error;
    }
}

module.exports = {
    GuardarSolicitud
}