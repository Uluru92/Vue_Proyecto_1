const VideoJuegosBD = require("../DataBase/VideoJuegosBD");

const ObtenerTodosLosVideoJuegos = (req, res) =>
{
    res.send("Hola! Este método es para conocer todos los video juegos!");
    const TodosLosVideoJuegos = VideoJuegosBD.ObtenerTodosLosVideoJuegos
}

module.exports = {
    ObtenerTodosLosVideoJuegos
};