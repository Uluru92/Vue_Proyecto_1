const path = require('path');

const db_archivo_directorio = path.join(__dirname, '../DataBase/VideoJuegosBD.json')

const ObtenerTodosLosVideoJuegos = () =>
{
    try
    {
        let informacionVideoJuegos = require(db_archivo_directorio);
        return informacionVideoJuegos.VideoJuegosRegistrados;
    }
    catch (error)
    {
        return error;
    }
    
}

module.exports = {
    ObtenerTodosLosVideoJuegos
}