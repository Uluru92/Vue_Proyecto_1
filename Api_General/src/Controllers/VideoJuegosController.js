const VideoJuegosBD = require("../DataBase/VideoJuegosBD");

const ObtenerTodosLosVideoJuegos = (req, res) =>
{
    const TodosLosVideoJuegos = VideoJuegosBD.ObtenerTodosLosVideoJuegos();
    res.send({ DetalleRespuesta: TodosLosVideoJuegos })

}

const ValidarDisponibilidad = (req, res) =>
{
    console.log('Hola', req.body);

    const informacionVideoJuego = req.body;
    const TodosLosVideoJuegos = VideoJuegosBD.ObtenerTodosLosVideoJuegos();
    const DisponibilidadVideoJuego = TodosLosVideoJuegos.some(x => x.disponibilidad === informacionVideoJuego.disponibilidad
        && x.gameName === informacionVideoJuego.gameName)
    
    let codigoDisponibilidad = 0;
    let descripcionDisponibilidad = "Video juego disponible"
    
    if (!DisponibilidadVideoJuego) {
        codigoDisponibilidad = 99;
        descripcionDisponibilidad = "Video juego no disponible"
    }

    const DetalleDisponibilidad = 
    {
        Codigo: codigoDisponibilidad,
        Descripcion: descripcionDisponibilidad
    }

    res.send(DetalleDisponibilidad)
}

const GuardarVideoJuego = (req, res) =>
{
    const nuevoVideoJuego = req.body;
    VideoJuegosBD.GuardarVideoJuego(nuevoVideoJuego);
    res.send("Hola")

    
}

module.exports = {
    ObtenerTodosLosVideoJuegos,
    ValidarDisponibilidad,
    GuardarVideoJuego
};