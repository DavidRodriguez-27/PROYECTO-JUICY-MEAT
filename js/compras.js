let productos = [];
let total = 0;

function agregar(producto, precio) {
    console.log(producto, precio);
    productos.push(producto);
    total = total + precio;
    document.getElementById("checkout").innerHTML = `Pagar S/. ${total}`
}

function pagar() {
    window.alert(productos.join(", \n" , "  Gracias por tu compra" ));
}