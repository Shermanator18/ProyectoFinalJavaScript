/* const cuota = function (number,cantCuotas,interes){return number * cantCuotas * interes };
let number = Number(prompt("Ingrese Monto Total"));
while (number<1){
    let number = Number(prompt("Ingrese Monto Total"));
}
let cantCuotas = Number(prompt("Ingrese cantidad de cuotas en las que va a pagar"));
while(cantCuotas<2){
    let cantCuotas = Number(prompt("Ingrese cantidad de cuotas en las que va a pagar"));
}
let interes = Number(prompt("Ingrese interes a cobrar"));
console.log(cuota(number,cantCuotas,interes));
 */
function funcion() {
    let total =   document.getElementById("monTot").value;
    let cuotas = document.getElementById("cuotas").value;
    let interes = document.getElementById("interes").value;
    if (total <2){
        alert("Error ingrese un total Valido");
        return;
    }
    if(cuotas <2){
        alert("Error ingrese cuotas validas");
        return;
    }
    if(interes <2){
        alert("Error ingrese interes valido");
        return;
    }
    const arrayGeneral =[total,cuotas,interes];
    let resultado = arrayGeneral[0] / arrayGeneral[1] + arrayGeneral[2]/arrayGeneral[1];
    alert(resultado);
}