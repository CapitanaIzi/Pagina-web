function main() {
    const inputTexto = document.querySelector("#entrada-texto");
    const inputNombre = document.querySelector("#entrada-nombre");
    const spanTituloTemp = document.querySelector("#titulo-temporal");

    const body = document.querySelector("body");
    console.log(inputTexto.value, inputNombre.value);

    spanTituloTemp.textContent = inputNombre.value + " - " + inputTexto.value;
    spanTituloTemp.style.color = "red";
    spanTituloTemp.style.backgroundColor = "white";

    body.style.backgroundColor = generadorColorAleatorio();
body.style.color="black";

    
}
function generadorColorAleatorio() {
    let codigoRojoAleatorio=generarCodigoAleatorio();
    let codigoVerdeAleatorio=generarCodigoAleatorio();
    let codigoAzulAleatorio=generarCodigoAleatorio();

    return `rgb(${codigoRojoAleatorio}, ${codigoVerdeAleatorio}, ${codigoAzulAleatorio})`;
}

function generarCodigoAleatorio() {
    return Math.floor(Math.random() * 256);
}
