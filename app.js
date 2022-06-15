function funcion() {
    let total =   document.getElementById("monTot").value;
    let cuotas = document.getElementById("cuotas").value;
    let interes = document.getElementById("interes").value;
    if (total <2){
        alert("Error ingrese un total Valido");
        total = document.getElementById("monTot").value = "";
        return;
    }
    if(cuotas <2){
        alert("Error ingrese cuotas validas");
        cuotas = document.getElementById("cuotas").value = "";       
        return;
    }
    if(interes <2){
        alert("Error ingrese interes valido");
        interes = document.getElementById("interes").value = "";
        return;
    }
    const arrayGeneral =[total,cuotas,interes];
    let resultado = arrayGeneral[0] / arrayGeneral[1] + arrayGeneral[2]/arrayGeneral[1];
    alert(resultado);
}