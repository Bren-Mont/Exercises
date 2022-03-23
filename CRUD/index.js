let express=require("express");
let bodyParser=require("body-parser");
let mongoose=require("mongoose");

let app=express();
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://bren21:*Bren2146@cluster0.lngd8.mongodb.net/ejemploNodeJs?retryWrites=true&w=majority").then(function(db){
    console.log("Conectado");
}). catch(function(err){
    console.log(err);
});
let Tarea=require("./src/models/Tareas");

app.get("/hola/:nombre", function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/tarea/:id', async function(req, res){
//let datos=req.body;
let id_tarea=req.params.id;


let t= new Tarea(datos);
    await t.save();

    res.redirect('/inicio');
});

app.listen(3000);
console.log("hola");
