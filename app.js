const express = require("express");
const app = express();

//configuramos para poder utilizar el archivo .env
require("dotenv").config();

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const port = process.env.PORT || 6000;
//importamos las rutas desde el archivo de la carpeta routes
const routes = require("./routes/index.js");

//configuramos cada uno de los middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.json())

//configuramos el servidor con las rutas
app.use("/", routes)

app.listen(port, () => {
    console.log(`app listen in port: ${port}`);
})