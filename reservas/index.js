var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));

var path = __dirname + '/src/views';
app.set('views', path);
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://bren21:*Bren2146@cluster0.lngd8.mongodb.net/Repaso?retryWrites=true&w=majority')
.then(function(db){
    console.log("Conectado a la BD");
})
.catch(function(err){
    console.log(err);
});

var Reserva = require("./src/models/Reservas");

//Muestra el inicio (listado de reservas)
app.get('/inicio', async function(req, res){
    var listado = await Reserva.find().sort({idCliente: 1});

    res.render('index', {
        reservas: listado
    });
});

//Nueva Reserva
app.get('/crear', function(req, res){
    
    res.render('agregar', {
        nuevo: true
    });

});

//Insertar Reserva
app.post('/reserva', async function(req, res){
    var datos = req.body;

    var nuevaReserva = new Reserva(datos);
    await nuevaReserva.save();

    res.redirect('/inicio');
});


//Ver detalle
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


app.listen(4000);