let mongoose=require("mongoose");
let express=require("express");
let bodyParser=require("body-parser");

let app= express();
app.use(bodyParser.urlencoded({ extended: true }));
var path = __dirname + '/src/views';
app.set('views', path);
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://bren21:*Bren2146@cluster0.lngd8.mongodb.net/ListaSupermercado?retryWrites=true&w=majority')
.then(function(db){
    console.log("Conectado a la BD");
})
.catch(function(err){
    console.log(err);
});
var Lista = require('./src/models/lista');


app.get('/inicio', async function(req, res){
    let compras = await Lista.find().sort({idComprador: 1});

    res.render('index', {
        listas: compras
    });
});


app.get('/crear', function(req, res){
    
    res.render('agregar', {
        nuevo: true
    });

});

app.post('/comprar', async function(req, res){
    var datos = req.body;

    var nuevaLista = new Lista(datos);
    await nuevaLista.save();

    res.redirect('/inicio');
});
app.get('/detalle/:id/:producto', async function(req, res){
    let id = req.params.id;

    let compras = await Lista.findById(id);

    res.render('detalle', {
        res: compras
    });
});


app.get('/modificar/:id', async function(req, res){
    let id = req.params.id;

    let compras = await Lista.findById(id);

    res.render('agregar', {
        nuevo: true,
        res: compras
    });

});

app.post('/modificar', async function(req, res){
    let datos = req.body;

    await Lista.updateOne({_id: req.body.id}, datos);

    res.redirect("/inicio");

});


app.get('/eliminar/:id', async function(req, res){
    let id = req.params.id;
    
   await Lista.findByIdAndRemove(id);

   res.redirect("/inicio");

});

app.listen(3000);