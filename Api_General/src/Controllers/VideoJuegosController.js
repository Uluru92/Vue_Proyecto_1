const VideoJuegosBD = require("../DataBase/VideoJuegosBD");

const ObtenerTodosLosVideoJuegos = (req, res) =>
{
    const TodosLosVideoJuegos = VideoJuegosBD.ObtenerTodosLosVideoJuegos();
    res.send({ DetalleRespuesta: TodosLosVideoJuegos })

}

const ValidarDisponibilidad = (req, res) =>
{
    console.log('Hola', req.body);
}

module.exports = {
    ObtenerTodosLosVideoJuegos,
    ValidarDisponibilidad
};