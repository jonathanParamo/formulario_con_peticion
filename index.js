const registrarDatosUsuario = () => {
  let primerNombre = document.getElementById("primerNombre").value;
  let segundoNombre = document.getElementById("segundoNombre").value;
  let primerApellido = document.getElementById("primerApellido").value;
  let segundoApellido = document.getElementById("segundoApellido").value;
  let numCedula = document.getElementById("numCedula").value;
  let numCelular = document.getElementById("numCelular").value;
  let edad = document.getElementById("edad").value;
  let direccion = document.getElementById("direccion").value;
  let nombreUsuario = document.getElementById("nombreUsuario").value;
  let correo = document.getElementById("correo").value;
  let estadoCivil = document.getElementById("estadoCivil").value;
  let estrato = document.getElementById("estrato").value;
  let checks = document.getElementsByClassName("valores").value;

  const persona = {
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    numCedula,
    numCelular,
    edad,
    direccion,
    nombreUsuario,
    correo,
    estadoCivil,
    estrato,
    checks
  }

console.log(persona)


  primerNombre = document.getElementById("primerNombre").value = "";
  segundoNombre = document.getElementById("segundoNombre").value = "";
  primerApellido = document.getElementById("primerApellido").value = "";
  segundoApellido = document.getElementById("segundoApellido").value = "";
  numCedula = document.getElementById("numCedula").value = "";
  numCelular = document.getElementById("numCelular").value = "";
  edad = document.getElementById("edad").value = "";
  direccion = document.getElementById("direccion").value = "";
  nombreUsuario = document.getElementById("nombreUsuario").value = "";
  correo = document.getElementById("correo").value = "";
  estadoCivil = document.getElementById("estadoCivil").value = "";
  estrato = document.getElementById("estrato").value = "";
  checks = document.getElementsByClassName("valores").value;
}


const cancelar = (persona) => {
  primerNombre = document.getElementById("primerNombre").value = "";
  segundoNombre = document.getElementById("segundoNombre").value = "";
  primerApellido = document.getElementById("primerApellido").value = "";
  segundoApellido = document.getElementById("segundoApellido").value = "";
  numCedula = document.getElementById("numCedula").value = "";
  numCelular = document.getElementById("numCelular").value = "";
  edad = document.getElementById("edad").value = "";
  direccion = document.getElementById("direccion").value = "";
  nombreUsuario = document.getElementById("nombreUsuario").value = "";
  correo = document.getElementById("correo").value = "";
  estadoCivil = document.getElementById("estadoCivil").value = "";
  estrato = document.getElementById("estrato").value = ";"
}

const checks = () => {
  let ingles = document.getElementById("ingles").value;
}