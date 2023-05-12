//Const y let
const valor = 4000;
const descuento5 = x => x * 0.95;
const descuento10 = y => y * 0.9;
let nombre = prompt("ingrese su nombre.");
let apellido = prompt ("ingrese su apellido.");
let mensajeCabaña = "Estas son nuestras cabañas:\n";

// Funcion
function ingresoDatos(){
    while(nombre === "" || apellido ===""){
        alert ("ingresar nombre y apellido para seguir.");
        nombre = prompt("ingrese su nombre.");
        apellido = prompt ("ingrese su apellido.");
    }
    let saludo = `Bienvenido/a ${nombre} ${apellido} a nuestras cabañas.`;
    alert(saludo);
}

ingresoDatos();

//while
let mensaje = parseInt(prompt("indique que dia del mes desea reservar, recuerde que puede reservar hasta el dia 31 inclusive."));
while (isNaN(mensaje) || mensaje > 31){
    if (isNaN(mensaje) || mensaje > 31) {
        alert("por favor, ingresa un número válido.");
        mensaje = parseInt(prompt("indique que dia del mes desea reservar, recuerde que puede reservar hasta el dia 31 inclusive"));
    }
}

alert(`Su reserva ha sido guardada para el día ${mensaje}.`);

//Switch
let dias =parseInt(prompt("indique cuantos dias va a reservar, el maximo de dias a reservar es de 8, recorda que reservando 2 dias o mas tenes un descuento del 5% y reservando 4 o mas un descuento de 10%."));

if (dias > 8 ){
    while(dias > 8 ){
        alert(`ingrese un numero valido.`);
        dias =parseInt(prompt("indique cuantos dias va a reservar, el maximo de dias a reservar es de 8, recorda que reservando 2 dias o mas tenes un descuento del 5% y reservando 4 o mas un descuento de 10%."));
    }
}
switch(dias){
        case 1: 
            alert (`el precio es de ${valor} por dia`);
            break;
        case 2:
        case 3:
            alert(`el precio es de ${dias*(descuento5(valor))}`)
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            alert(`el precio es de ${dias*(descuento10(valor))}`)
            break;
}

// Objetos y arrays
const cabañas = [
    {id:1, nombre:"Aloha", descripcion: "cabaña para 2 personas."},
    {id:2, nombre:"Suico", descripcion: "cabaña para 3 personas."},
    {id:3, nombre:"Sol", descripcion: "cabaña para 4 personas."},
    {id:4, nombre:"Luna", descripcion: "cabaña para 5 o mas personas."},
]
cabañas.forEach(item=>{
    mensajeCabaña += `${item.nombre}, ${item.descripcion}\n`
})
alert(mensajeCabaña);

//Find, While e if
let reservaCabaña = prompt("indique que cabaña desea reservar.");
reservaCabaña = reservaCabaña.toLowerCase();
let cabañaEncontrada = cabañas.find(item => item.nombre.toLowerCase() === reservaCabaña);

while(!cabañaEncontrada){
    if(!cabañaEncontrada){
    alert("Cabaña inexistente. Por favor, vuelva a intentarlo.");
    }
    reservaCabaña = prompt("Indique qué cabaña desea reservar.");
    reservaCabaña = reservaCabaña.toLowerCase();
    cabañaEncontrada = cabañas.find(item => item.nombre.toLowerCase() === reservaCabaña);
}
alert("Cabaña reservada.");

//Despedida
alert(`gracias ${nombre} ${apellido} por reservar en nuestras cabañas, te esperamos!`);






