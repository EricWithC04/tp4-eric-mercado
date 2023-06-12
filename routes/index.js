const { Router } = require('express');
//importamos las funciones de la carpeta controllers
const { rutaGet, rutaPost, rutaPut, rutaDelete } = require('../controllers/index.js');

const router = Router();

router.get("/get", rutaGet)

router.post("/post", rutaPost)

router.put("/put", rutaPut)

router.delete("/delete", rutaDelete)

//exportamos las rutas
module.exports = router