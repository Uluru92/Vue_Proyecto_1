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
    const DisponibilidadVideoJuego = TodosLosVideoJuegos.some(x => x.disponible === informacionVideoJuego.disponible)

    const RespuestaDisponibilidad = 
    {
        valor: DisponibilidadVideoJuego,
        descripcion: "Hay juegos disponibles"
    }
    res.send(RespuestaDisponibilidad)

}

module.exports = {
    ObtenerTodosLosVideoJuegos,
    ValidarDisponibilidad
};