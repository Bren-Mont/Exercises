let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let Tarea=new Schema({
    titulo:String,
    archivo:String,
    descripcion: {
        type:String,
        default:"..."
    },
    fecha: String,
    estado:{
        type: Boolean,
        default:false
    }
});
module.exports = mongoose.model('Tareas', Tarea);