// Cabañas
const cabañas = [
    { id: 1, nombre: "Aloha", descripcion: "cabaña para 2 personas." },
    { id: 2, nombre: "Suico", descripcion: "cabaña para 3 personas." },
    { id: 3, nombre: "Sol", descripcion: "cabaña para 4 personas." },
    { id: 4, nombre: "Luna", descripcion: "cabaña para 5 personas." },
];
const formulario = document.querySelector(".form");
const containerCabanas = document.querySelector(".container-cabanas");
const valor = 4000;

function mostrarCabanas() {
    for (let i = 0; i < cabañas.length; i++) {
        let divCabana = document.createElement("DIV");
        let nombreCabana = document.createElement("P");
        let descripcionCabana = document.createElement("P");
        let idCabana = document.createElement("P");

        let botonAlquilar = document.createElement("BUTTON");
        botonAlquilar.textContent = "ALQUILAR";
        botonAlquilar.classList.add("boton-alquilar");

        idCabana.textContent = cabañas[i].id;
        nombreCabana.textContent = cabañas[i].nombre;
        descripcionCabana.textContent = cabañas[i].descripcion;

        let infoCabana = [
            idCabana,
            nombreCabana,
            descripcionCabana,
            botonAlquilar,
        ];

        infoCabana.forEach((e) => {
            divCabana.appendChild(e);
        });
        divCabana.classList.add("divCabana");

        containerCabanas.appendChild(divCabana);
    }
}
function alquilarCabana() {
    let botonesAlquilar = document.querySelectorAll(".boton-alquilar");

    botonesAlquilar.forEach((e) => {
        e.addEventListener("click", () => {
            containerCabanas.innerHTML = "";
            alquilarCompra();
            compra();
        });
    });
}

const botonIngreso = document.getElementById("boton-ingreso");
const inputIngreso1 = document.querySelector(".input-ingreso1");
const inputIngreso2 = document.querySelector(".input-ingreso2");
let nombreUsuario;
botonIngreso.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputIngreso1.value === "" || inputIngreso2.value === "") {
        alert("Completa todos los campos");
    } else {
        formulario.innerHTML = "";
        nombreUsuario = inputIngreso1.value;
        mostrarCabanas();
        alquilarCabana();
    }
});
function alquilarCompra() {
    localStorage.setItem("Nombre", nombreUsuario);
    let nombreCompra = localStorage.getItem("Nombre");
    let parrafoCompra = document.createElement("P");
    parrafoCompra.textContent = `Hola ${nombreCompra} Elige la cantidad de dias que te vas a hospedar, el maximo de dias a reservar es de 8, recorda que reservando 2 dias o mas tenes un descuento del 5% y reservando 4 o mas un descuento de 10%.`;

    let select = document.createElement("select");
    select.classList.add("select-dias");
    let placeholderOption = document.createElement("option");
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.text = "Cantidad de dias";
    select.appendChild(placeholderOption);

    let option1 = document.createElement("option");
    option1.value = "1";
    option1.text = "1";
    let option2 = document.createElement("option");
    option2.value = "2";
    option2.text = "2";
    let option3 = document.createElement("option");
    option3.value = "3";
    option3.text = "3";
    let option4 = document.createElement("option");
    option4.value = "4";
    option4.text = "4";
    let option5 = document.createElement("option");
    option5.value = "5";
    option5.text = "5";
    let option6 = document.createElement("option");
    option6.value = "6";
    option6.text = "6";
    let option7 = document.createElement("option");
    option7.value = "7";
    option7.text = "7";
    let option8 = document.createElement("option");
    option8.value = "8";
    option8.text = "8";

    let options = [
        option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8,
    ];
    options.forEach((e) => {
        select.appendChild(e);
    });

    let containerCompra = document.createElement("div");
    let buttonComprar = document.createElement("button");
    buttonComprar.textContent = "COMPRAR";
    buttonComprar.classList.add("comprar-boton");
    containerCompra.appendChild(select);
    containerCompra.appendChild(buttonComprar);

    containerCabanas.appendChild(parrafoCompra);
    containerCabanas.appendChild(containerCompra);
}

function compra() {
    botonCompra = document.querySelector(".comprar-boton");
    selectDias = document.querySelector(".select-dias");
    botonCompra.addEventListener("click", () => {
        diaSeleccionado = selectDias.value;
        containerCabanas.innerHTML = "";
        let parrafoCompra = `El valor por dia es de 4000, has seleccionado ${diaSeleccionado} dias, asi que tu valor final es: ${valor*diaSeleccionado}`
        let pCompra = document.createElement('P');
        let botonCompra = document.createElement('button');

        botonCompra.textContent = 'COMPRAR';
        botonCompra.classList.add('boton-alquilar');
        botonCompra.classList.add('boton-comprar-final');

        pCompra.textContent = parrafoCompra;
        containerCabanas.appendChild(pCompra);
        containerCabanas.appendChild(botonCompra)

        let body = document.querySelector('body');
        let nombre = localStorage.getItem('Nombre');
        botonCompra.addEventListener('click',()=>{
            body.innerHTML = '';
            alert(`Gracias ${nombre} por reservar tu estadia`);
        })
    });
}




