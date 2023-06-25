function agregarcarrito(numero){
    let contador=0;
    switch(numero){
        case 1:
            contador=500;
        break;
        case 2:
        case 5:
            contador=1000;
            break;
        case 3:
        case 8:
            contador=3000;
            break;
        case 4:
            contador=200;
        case 6:
        case 7:
            contador=1500;
            break;
            default:
                break;
    }
    let unidades= prompt("¿Cuantos productos desea llevar?")
    console.log("Producto: "+ producto + " " + "Unidades: " + unidades + " "  + "Precio: " + contador)
    let multiplicacion= contador * unidades;
    console.log(multiplicacion);
    return multiplicacion
}
function sumatotal(multiplicacion){
    let precio=0;
     let total= precio + multiplicacion;
     return total
}

function mostrar(total){
    console.log()
}
//PRINCIPIO
let entrada= prompt ("Hola! Bienvenido a Tu Amigo Fiel Pet Shop ¿Desea relizar una compra?").toLowerCase()
while(entrada!="si" && entrada!="no"){
    alert("Respueta invalida");
    entrada= prompt ("Hola! Bienvenido a Tu Amigo Fiel Pet Shop ¿Desea relizar una compra?").toLowerCase()
}
if(entrada=="si"){
    alert("Acontinuacion la lista de productos:")
}else{
    alert("Gracias, Vuelva Pronto!");
}
while(entrada!="no"){
    let producto= Number(prompt("1-Piedritas Santitarias: $500 2-Litera y Palita:$ 1000 3-Bolsa Comida Gato 3kg:$3000 4-Juguetes:$200 5-Collar y Chapita:$ 1000 6-Ropita Perro:$1500 7-Correa y Pretal:$ 1500 8-Bolsa Comida Perro 3kg:$3000"))
    if(producto==1 || producto==2 || producto==3 || producto==4 || producto==5 || producto==6 || producto==7 || producto==8){
        agregarcarrito(producto)
    }else{
      alert("Ese numero de producto no existe")  
    }
    entrada= prompt("¿Desea agregar otro producto?")
    if(entrada==="no"){
        alert("Gracias por su compra!")

    }
}
