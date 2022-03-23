// 1-Confeccionar un programa en JavaScript que defina e inicializa una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo. Imprimir cada variable en una línea distinta en pantalla.

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  let empleado = document.getElementById("empleado").value;
  let sueldo = document.getElementById("sueldo").value;
  document.getElementById("msj").innerHTML = x(empleado, sueldo);
});

function x(empleado, sueldo) {
  return "Hola " + empleado + " este es tu sueldo " + sueldo;
};

// 2-Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)
document.getElementById("btn1").addEventListener("click", function (e) {
  e.preventDefault();
  let type = document.getElementById("combo").value;
  document.getElementById("msj1").innerHTML = cosa(type);
  console.log();
});


function cosa(type) {
  let result;
  switch (type) {
    case "1":
      result = "House";
      break;
    case "2":
      result = "Table";
      break;
    case "3":
      result = "Dog";
      break;
    case "4":
      result = "Cat";
      break;
    default:
      break;
  }
  return result;
}

// 3-Usando if y switch codifica el siguiente algoritmo: Crear un sistema de pedidos online para una pizzería con el siguiente menú:
// Pizza Personal
// *Pollo y Champiñones
//        -Con Queso
//        -Sin Queso
//             -> Con Salsa
//             -> Con Borde de Bocadillo
// *Hawaiana
//       -Sin Piña
//       -Sin Jamón
// -> Con Salami

// * Carnes
// -Sin Salami
//     -> Con Cabano
// -Con Queso

// Pizza Mediana
// *Mexicana
// -Con Nachos
// -Sin Nachos
//    -> Extra Guacamole
// * Criolla
//    -Con Maíz
//    -Sin Maíz
//       -> ExtraCarne Molida
//        -> Con Queso

// Pizza Familiar
// *Vegetariana
//       -Con Queso
//        -Sin Queso
//  * Carne y Pollo
//        -Adición de Salchicha
//        -Adición de Champiñones
// El usuario tiene libertad de escoger el tamaño y sabor de su pizza respectivamente. Si el usuario ingresa no en alguno de los pasos del pedido, se da por terminado el pedido.
// Ej: ¿Qué pizza desea ordenar?
//    Personal
// Pollo & Champiñones, Hawaina o Carnes?
//     Carnes
// ¿Desea sin salami o desea con queso?
//    Sin Salami
// Su pedido es una pizza personal de carnes sin salami

// Ej2: ¿Qué pizza desea ordenar?
//   Personal
// Pollo & Champiñones, Hawaina o Carnes?
//    Carnes
// ¿Desea sin salami o desea con queso?
//     No
// Su pedido es una pizza personal de carnes

// 4-Realiza una página que muestre una imagen que cambie cuando el ratón pase por encima de la imagen y que vuelva a cambiar cuando salga de ella.

// 5-Usando funciones y DOM codifica el siguiente algoritmo: Crear un botón que permita agregar divs. Estos divs al usuario darle click deben cambiar su color. Cada vez que el usuario interactúe con el div, éste debe cambiar de color y cada vez que el usuario interactúe con el botón se debe crear un nuevo div

// 6-Realiza una página haga desaparecer elementos al paso del ratón y los muestre con un click de ratón sobre texto.

// 7-Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:

// var numero1 = 5;
// var numero2 = 8;

// if(...) {
//   console.log("numero1 no es mayor que numero2");
// }
// if(...) {
//   console.log("numero2 es positivo");
// }
// if(...) {
//   console.log("numero1 es negativo o distinto de cero");
// }
// if(...) {
//   console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// 8. Ejercicio de Switch
// Hacer un programa donde al usuario si ingresa un día de la semana le indique que día es, si hace parte de la semana o del fin de semana, según las actividades que ingrese.

// Es decir:
// Ingresar los días de la semana, y que el usuario tenga un control de sus días ingresando en cada día las actividades importantes y que al final me muestre las actividades que hay en cada día si pertenecen a la semana o al fin de semana

// 9. Ejercicios Condicionales.

// Hacer un programa que según la edad debe ser mayor de 18 para ingresar a la discoteca, pero la discoteca tiene precios según el sexo de la persona. Si es chica mayor de 25 paga de a 25.000 la entrada y si es menor su valor será de 20.000 . Si es chico paga 30.000 si es mayor de 24 y si es menor paga 25.000. Recuerden colocar los valores validos tanto del sexo de la persona, para que ingrese al programa.

// Hacer un programa que compruebe si el usuario tiene dinero suficiente en su cuenta para realizar unas supuestas compras. Si quiere consultar el saldo de su cuenta debe responder si o no, y mostrarle su saldo, si le alcanza para el producto, le diré que se ha introducido el artículo en el carrito. Si el precio del artículo es superior al dinero disponible de la cuenta le digo al usuario que vuelva cuando haya fondos suficientes para comprar.
