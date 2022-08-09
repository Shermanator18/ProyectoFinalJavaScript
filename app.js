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
        const arrayGeneral =[total,cuotas,interes,0];
        let resultado = arrayGeneral[0] / arrayGeneral[1] + arrayGeneral[2]/arrayGeneral[1];
        arrayGeneral[4]= resultado;
        alert(arrayGeneral[4]);
    }
    /*let total =   document.getElementById("monTot").value;
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
    const arrayGeneral =[total,cuotas,interes,0];
    let resultado = arrayGeneral[0] / arrayGeneral[1] + arrayGeneral[2]/arrayGeneral[1];
    arrayGeneral[4]= resultado;
    alert(arrayGeneral[4]);
    */