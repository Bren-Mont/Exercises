let express=require("express");
let app=express();
let path=require("path");
let bodyParser= require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));

app.get("/formulario", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/test", function(req, res){
    let num1 = Number(req.body.numberOne);
    let num2 = Number(req.body.numberTwo);
    let op = req.body.operacion;

    console.log("Recibimos tu peticion con los valores: " + num1 + " y " + num2);
    console.log("______________");
   

    let resultado = operacion(num1, num2, op);
 

    res.send("Gracias por enviarnos tus datos. Ahora sabemos tus valores: " + " La respuesta de tu operaion es " + resultado  );
});
app.listen(3000);

function operacion(num1, num2, type){
    let result;
   switch (type) {
       case "suma":
       result = num1+num2;    
           break;
        case "resta":
        result = num1-num2;   
           break;
        case "multiplicacion":
           result = num1*num2;
           break;
        case "division":
        result = num1/num2;   
           break;
       default:
           break;
   }
   return result
};



// Crear un formulario, donde el usuario pueda ingresar 2 números (2 inputs).
// En el servidor mostrar por consola suma, multiplicación, división y resta de esos 2 números.
