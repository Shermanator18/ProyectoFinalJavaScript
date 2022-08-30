class Usuario {
    constructor(obj) {
        this.nombre  = obj.Usuario.toUpperCase();
        this.pass  = obj.Usuario.toUpperCase();
    }
}
let miform = document.getElementById("formulario");
miform.addEventListener("submit", validarForm);
let frmlogin = document.getElementById("formLogin");    
frmlogin.addEventListener("submit" , validarLogin);
let formIva = document.getElementById("formIVA");
formIva.addEventListener("submit",validarIVA);
let DateTime = luxon.DateTime;
function validarIVA(e){
    e.preventDefault();
    let formul = e.target;
    let total =  formul.children[1].value;
    if(document.getElementById("21").checked && document.getElementById("incluye").checked){
        document.getElementById("tot").innerHTML = "El total es "+total;
        let totSiva = total - (total*0.21);
        let iva = total*0.21;
        document.getElementById("ivaaa").innerHTML = "El iva es "+iva;
        document.getElementById("totSinIva").innerHTML ="El total sin iva es de "+totSiva;
        return;
    }
    if(document.getElementById("10").checked && document.getElementById("incluye").checked){
        document.getElementById("total").innerHTML = "El total es "+total;
        let totSiva = total - (total*0.105);
        let iva = total*0.105;
        document.getElementById("ivaaa").innerHTML = "El iva es "+iva;
        document.getElementById("totSinIva").innerHTML ="El total sin iva es de "+totSiva;
        return;
    }
    if(document.getElementById("27").checked && document.getElementById("incluye").checked){
        document.getElementById("tot").innerHTML = "El total es "+total;
        let totSiva = total - (total*0.27);
        let iva = total*0.27;
        document.getElementById("ivaaa").innerHTML = "El iva es "+iva;
        document.getElementById("totSinIva").innerHTML ="El total sin iva es de "+totSiva;
        return;
    }
    if(document.getElementById("21").checked){
        let iva = total*0.21;
        let totCiva = total + (total*0.21);
        document.getElementById("tot").innerHTML = "El total es "+totCiva;
        
        document.getElementById("ivaaa").innerHTML = "El iva es "+iva;
        document.getElementById("totSinIva").innerHTML ="El total sin iva es de "+total;
    }
    if(document.getElementById("10").checked){
        let totCiva = total + (total*0.105);
        document.getElementById("tot").innerHTML = "El total es "+totCiva;
        let iva = total*0.105;
        document.getElementById("ivaaa").innerHTML = "El iva es "+iva;
        document.getElementById("totSinIva").innerHTML ="El total sin iva es de "+total;
    }
    if(document.getElementById("27").checked){
        let totCiva = total + (total*0.27);
        document.getElementById("tot").innerHTML = "El total es "+totCiva;
        let iva = total*0.27;
        document.getElementById("ivaaa").innerHTML = "El iva es "+iva;
        document.getElementById("totSinIva").innerHTML ="El total sin iva es de "+total;
    }
    let usuarioEnLS = JSON.stringify(localStorage.getItem("User"));
        let dia = DateTime.now().toLocaleString()	
        alert("Hola "+usuarioEnLS[5]+" hoy es: "+dia);
}
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
        let  arrayIngreso =[total,cuotas,interes];
        let  arrResultados=[0,0,0];
        /*Calculo el interes mensual*/
        arrResultados[0] = arrayIngreso[2] / 12;
        /*Calculo el valor de cada cuota*/
        arrResultados[1] = (arrayIngreso[0] / arrayIngreso[1])*arrResultados[0];
        /*Calculo el total a pagar*/
        arrResultados[2] = arrResultados[1] * arrayIngreso[1];
        /*Muestra resultados*/
        /*Traigo UserInfo**/
        let usuarioEnLS = JSON.stringify(localStorage.getItem("User"));
        let dia = DateTime.now().toLocaleString()	
        alert("Hola "+usuarioEnLS[5]+" hoy es: "+dia);
        document.getElementById('totcuota').innerHTML = 'El valor de cada Cuota es de: '+parseFloat(arrResultados[1]).toFixed(2);
        document.getElementById('total').innerHTML = 'El valor total a pagar es de: '+parseFloat(arrResultados[2]).toFixed(2);
    }
function validarLogin(e){
    e.preventDefault();
    let formm = e.target;
    let nomb =  frmlogin.children[1].value;
    let pass =  frmlogin.children[3].value;
    const usuario = { id: 1,  nombre: nomb, contra: pass };
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarLocal("User", JSON.stringify(usuario));
    document.getElementById("formLogin").style.display="none";
    document.getElementById("formulario").style.display="block";
}
function IVA(){
    document.getElementById("formIVA").style.display="block";
    document.getElementById("formulario").style.display="none";
    validarIVA();
}
function DOLAR(){
    document.getElementById("formDolar").style.display="block";
    document.getElementById("formulario").style.display="none";
    let dia = DateTime.now().toLocaleString();
    document.getElementById("HoraDia").innerHTML = dia
    fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((resp)=> resp.json())
    .then((data) =>{
        document.getElementById("DlOf").innerHTML = "El valor de venta es de " +data.oficial.value_sell
        document.getElementById("DlBl").innerHTML = "El valor de venta es de " + data.blue.value_sell
        document.getElementById("Eu").innerHTML = "El valor de venta es de " + data.oficial_euro.value_sell
    })
}