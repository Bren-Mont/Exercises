
function sumar () {
  let num1=document.getElementById("num1").value;
  let num2=document.getElementById("num2").value;
  let total= Number(num1) + Number(num2);
  alert(total)
  localStorage.setItem('total', total);
}

  var b1 = document.getElementById("btn-sumar");
  b1.addEventListener("click", sumar);

