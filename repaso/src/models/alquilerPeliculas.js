let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let Alquiler=new Schema({
    idPelicula: Number,
    formato:String,
    fechaRetiro:String,
    idCliente:Number
});

module.exports=mongoose.model("Alquileres",Alquiler);