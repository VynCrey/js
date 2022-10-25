 //alert("hola coder");
const productos = [
    { nombre: "setup 1", precio: 1000},
    { nombre: "setup 2", precio: 1100},
    { nombre: "setup 3", precio: 1200},
    { nombre: "setup 4", precio: 1300},
];
let carrito =[]

let seleccion = prompt("Hola Bienvenido, deseas comprar algun setup (contestar con si o no porfavor)")

while(seleccion != "si" && seleccion != "no"){
    console.log("PORFAVOR INGRESAR si O no")
    seleccion = prompt("Hola deseas comprar algo")
}

if(seleccion == "si"){
    console.log("Te mostraremos la lista de productos")
    console.log(productos)
}else if (seleccion == "no"){
    console.log("gracias por entrar a esta tienda, saludos los esperamos")
}
while(seleccion != "no"){
    let productos = prompt("Agrega un producto a tu carrito")
    let precio = 0
    if(productos == "setup 1" || productos == "setup 2" || productos == "setup 3" || productos == "setup 4" ){
        switch (productos){
            case "setup 1":
                precio = 1000;
                break;
            case "setup 2":
                precio = 1100;
                break;
            case "setup 3":
                precio = 1200;
                break;
            case "setup 4":
                precio = 1300;
                break;
            default:
                break; 
        }
    carrito.push({productos})
    console.log(carrito)
    
    } else{
        console("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando?")
    while(seleccion == "no"){
        console.log("gracias por la compra hasta pronto")
        
    }
}