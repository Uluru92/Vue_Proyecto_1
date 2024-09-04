const path = require('path');
const fs = require('fs');
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

const GuardarVideoJuego = (VideoJuego) => {
    try {
        let informacionVideoJuegos = require(db_archivo_directorio);
        informacionVideoJuegos.VideoJuegosRegistrados.push(VideoJuego);
        fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionVideoJuegos, null, 2))
    }
    catch (error) {
        return error;
    }    
}

module.exports = {
    ObtenerTodosLosVideoJuegos,
    GuardarVideoJuego
}