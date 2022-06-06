const cuota = function (number,cantCuotas,interes){return number * cantCuotas * interes /**/};
let number = Number(prompt("Ingrese Monto Total"));
let cantCuotas = Number(prompt("Ingrese cantidad de cuotas en las que va a pagar"));
let interes = Number(prompt("Ingrese interes a cobrar"));
console.log(cuota(number,cantCuotas,interes));