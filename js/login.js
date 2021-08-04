 
var usuario = ["admin"]
var contraseña =["admin"]

function cargar(frm){
    var user= frm.txtusuario.value;
    let i=-1;
    for (let j = 0; j < usuario.length; j++) {
        if (usuario[j]==user) {
            i=j
            break;
            
        }
        
    }if (i==-1) {
        window.event.preventDefault();
        alert ("Usuario incorrecto");
        return;
        
    }
   
    var pass = frm.txtcontraseña.value;
    if (pass==contraseña[i]) {
        alert(" Bienvenido a nuestra tienda online");
        window.open("../paginas/compras.html")       
        
    }


}


 




