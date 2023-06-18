require("./config/conexion");

const express = require('express');
const cors = require('cors');
const port = process.env.port || 3000;

// express
const app = express();
app.use(express.json())

app.use(cors());

//configurar
app.set("port", port);

//rutas
app.use("/", require("./rutas"));

//inicializar express
app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("error al iniciar el servidor: " + error);
  } else {
    console.log("servidor iniciado en el puerto: " + port);
  }
});
