//declaramos las funciones con los mensajes

function rutaGet (req, res) {
    res.status(200).send("Esta ruta hace una peticion GET")
}

function rutaPost (req, res) {
    res.status(200).send("Esta ruta hace una peticion POST")
}

function rutaPut (req, res) {
    res.status(200).send("Esta ruta hace una peticion PUT")
}

function rutaDelete (req, res) {
    res.status(200).send("Esta ruta hace una peticion DELETE")
}

//exportamos las funciones
module.exports = {
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete
}