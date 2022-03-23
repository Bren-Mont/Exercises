let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://bren21:*Bren2146@cluster0.lngd8.mongodb.net/Repaso?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Estamos conectados");
  })
  .catch(function (err) {
    console.log(err);
  });

let Alquiler = require("./src/models/alquilerPeliculas");

app.get("/alquiler", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/alquilerPeliculas", async function (req, res) {
  let datosAlquiler = req.body;
  let ap = new Alquiler(datosAlquiler);
  await ap.save();
  console.log("Recibido");
  res.redirect("/alquiler");
});

let Cliente = require("./src/models/cliente.js");

app.get("/registroCliente", function (req, res) {
  res.sendFile(__dirname + "/inicios/clientes.html");
});
app.get("/cliente", async function (req, res) {
  let clienteId = req.query.clienteId;
  let documento = await Cliente.findOne({ clienteId:clienteId });
  console.log(documento);

  let result;
  if (documento== 0|| !documento) {
    console.log("no");
    result = "No";
  } else {
    console.log("si");
    result = "Si";
  }
  res.send(result + " existe");
});
app.get("/eliminar", async function (req, res) {
  let clienteId = req.query.clienteId;
  let cEliminar = await Cliente.findOneAndRemove({ clienteId });
  console.log(cEliminar);
  let result;
  if (cEliminar== 0||!cEliminar) {
    result=("No existe un cliente con ese Id");
} else {
    result=("Cliente eliminado");
}
res.send(result);
});

app.get('/modificar', async function(req, res){
    let clienteId = req.query.clienteId;
    let nombre = req.query.nombre;
    let apellido=req.query.apellido;
    let telefono=req.query.telefono;
    let resultado = await Cliente.updateOne({clienteId:clienteId},{nombre:nombre, apellido:apellido, telefono:telefono});
    console.log(resultado);
    let result;
  if (resultado==null  ) {
    result=("No existe un cliente con ese Id");
} else {
    result=("Cliente modificado");
}
res.send(result);
});
    
app.post("/cliente", async function (req, res) {
  let datosCliente = req.body;
  let c = new Cliente(datosCliente);
  await c.save();
  console.log(datosCliente);
  res.redirect("/registroCliente");
});

let Pelicula = require("./src/models/pelicula.js");

app.get("/registroPeliculas", function (req, res) {
  res.sendFile(__dirname + "/inicios/peliculas.html");
});

app.post("/pelicula", async function (req, res) {
  let datosPelicula = req.body;
  let p = new Pelicula(datosPelicula);
  await p.save();
  console.log("Recibido");
  res.redirect("/registroPeliculas");
});

app.listen(4500);
