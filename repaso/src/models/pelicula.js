let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let Pelicula=new Schema({
    idPelicula: Number,
    titulo:String,
    año:Number,
    genero:String
});

module.exports=mongoose.model("Pelicula",Pelicula);