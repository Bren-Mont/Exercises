var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path =require("path")

//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.static(path.join(__dirname,"public")));


mongoose.connect("mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/Reservas?retryWrites=true&w=majority")
.then(function(db){
    console.log("Conectado a la BD");
})
.catch(function(err){
    console.log(err);
});

var Reserva = require("./src/models/carrito"); // enlazado el schema hay que modificar segun lo que tenga nicolas



//RUTAS


app.get('/inicio', function(req, res){
    
    res.render('index.ejs', {
        nuevo: true
    });

});



app.get('/gorras', function(req, res){
    
    res.render('gorras', {
        nuevo: true
    });

});

app.get('/camisas', function(req, res){
    
    res.render('camisas', {
        nuevo: true
    });

});

//Insertar Reserva // insertar carrito para compras!!!!
app.post('/reserva', async function(req, res){
    var datos = req.body;

    var nuevaReserva = new Reserva(datos);
    await nuevaReserva.save();

    res.redirect('/inicio');
});


//Ver detalle// insertar carrito para compras!!!! sirven las dos rutas
app.get('/detalle/:id/:auto', async function(req, res){
    var id = req.params.id;

    var reserva = await Reserva.findById(id);

    res.render('detalle', {
        res: reserva
    });
});


//Modiciar
app.get('/modificar/:id', async function(req, res){
    var id = req.params.id;

    var reserva = await Reserva.findById(id);

    res.render('agregar', {
        nuevo: false,
        res: reserva
    });

});

app.post('/modificar', async function(req, res){
    var datos = req.body;

    await Reserva.updateOne({_id: req.body.id}, datos);

    res.redirect("/inicio");

});


//Eliminar
app.get('/eliminar/:id', async function(req, res){
    var id = req.params.id;
    
   await Reserva.findByIdAndRemove(id);

   res.redirect("/inicio");

});


app.listen(3000);
