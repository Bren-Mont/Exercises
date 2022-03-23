// $(document).ready(function(){
//     alert("Hola Mundo, estoy probando JQuery");

//     SELECTORE

//     Por ID
//     $("#btn");

//     Por clase
//     var texto = $(".parrafo").text();
    
//     Por atributo de elemnto
//     $("input[name=nombre]");
    

//     Evento click (es como el addEventListener)
//     $("#btn").click(function(){
//         var inp = $("#field").val();
//         alert(inp);

//         $(".parrafo").fadeOut("slow").text("Cambie el texto").fadeIn("slow");
//         $(".parrafo")
//         .css({"background-color": "red", "color": "white", "font-size":"30px"})
//         .hide(3500);
        
//     });

//     Evento cuando se levanta una tecla
//     $("#field").keyup(function(){
//         $("#h1").text($("#field").val());
//     });

//     Evento doble click en el body
//     $("body").dblclick(function() {
//         alert("Hiciste doble click en la etiqueta body");
//     });
    
    
// });

/*
EJERCICIO:

2 input
1 botón
Cuando se hace click en el botón, que se muestre el texto del input_1 y el input_2
concatenados en un H3.

*/
// Contraer
/*
EJERCICIO:

2 input
1 botón
Cuando se hace click en el botón, que se muestre el texto del input_1 y el input_2
concatenados en un H3.

*/
// $(document).ready(function(){
//     // $("#btn");
//     // $(".text1").text();
//     // $(".text2").text();

//     $("#btn").click(function() {
//         let text=$(".text1").val( ) + " " +$(".text2").val();
//         $(".h3").text(text);
//         alert(text);
//     });
// })
// ;
let a=10;
let b=3;
let total= 0;
b++
a=b
for (let i = 0; i<b; i++) {
    total=total+a;
}
console.log(total);

