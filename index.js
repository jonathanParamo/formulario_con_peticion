const registrarDatosUsuario = () => {
  const primerNombre = document.getElementById("primerNombre").value;
  const segundoNombre = document.getElementById("segundoNombre").value;
  const primerApellido = document.getElementById("primerApellido").value;
  const segundoApellido = document.getElementById("segundoApellido").value;
  const numCedula = document.getElementById("numCedula").value;
  const numCelular = document.getElementById("numCelular").value;
  const edad = document.getElementById("edad").value;
  const direccion = document.getElementById("direccion").value;
  const nombreUsuario = document.getElementById("nombreUsuario").value;
  const correo = document.getElementById("correo").value;
  const estadoCivil = document.getElementById("estadoCivil").value;
  const estrato = document.getElementById("estrato").value;
  const idioma = checks();
  const sexo = document.querySelector("input[name=sexo]:checked").value;

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
    idioma,
    sexo
  }

  cancelar();
}

const cancelar = () => {
  document.getElementById("primerNombre").value = "";
  document.getElementById("segundoNombre").value = "";
  document.getElementById("primerApellido").value = "";
  document.getElementById("segundoApellido").value = "";
  document.getElementById("numCedula").value = "";
  document.getElementById("numCelular").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("nombreUsuario").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("estadoCivil").value = "";
  document.getElementById("estrato").value = "";
}

const checks = () => {
  let idiomas = [];
  if (document.getElementById('ingles').checked) {
    idiomas.push("ingles")
  }
  if (document.getElementById('espanol').checked) {
    idiomas.push('espanol')
  }
  if (document.getElementById('italiano').checked) {
    idiomas.push("italiano")
  }
  if (document.getElementById('frances').checked) {
    idiomas.push('frances')
  }
  if (document.getElementById('aleman').checked) {
    idiomas.push("aleman")
  }
  return idiomas;
}

