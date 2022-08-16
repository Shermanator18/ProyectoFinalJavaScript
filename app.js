let miform = document.getElementById("formulario");
miform.addEventListener("submit", validarForm);
    function validarForm(e){
        e.preventDefault();
        let formulario = e.target;
        let total =  formulario.children[1].value;
        let cuotas =  formulario.children[3].value;
        let interes =  formulario.children[5].value;
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
        let  arrayIngreso =[total,cuotas,interes,0];
        let  arrResultados=[0,0,0];
        /*Calculo el interes mensual*/
        arrResultados[0] = arrayIngreso[2] / 12;
        /*Calculo el valor de cada cuota*/
        arrResultados[1] = (arrayIngreso[0] / arrayIngreso[1])*arrResultados[0];
        /*Calculo el total a pagar*/
        arrResultados[2] = arrResultados[1] * arrayIngreso[1];
        /*Muestra resultados*/
        document.getElementById('totcuota').innerHTML = 'El valor de cada Cuota es de: '+parseFloat(arrResultados[1]).toFixed(2);
        document.getElementById('total').innerHTML = 'El valor total a pagar es de: '+parseFloat(arrResultados[2]).toFixed(2);
        alert(arrResultados[2]);
    }