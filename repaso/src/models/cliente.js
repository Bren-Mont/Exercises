let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let Cliente=new Schema({
    clienteId: Number,
    nombre:String,
    apellido:String,
    telefono:Number,

});

module.exports=mongoose.model("Cliente",Cliente);