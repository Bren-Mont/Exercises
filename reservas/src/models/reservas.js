let mongoose=require("mongoose");
const { boolean } = require("webidl-conversions");
let Schema=mongoose.Schema;

let Reserva=new Schema({
    idCliente:Number,
    fecha:String,
    auto:String,
    ciudad:String,
    estadoPago:{
        type:Boolean,
        default: false
    }
});
module.exports=mongoose.model("Reservas", Reserva);