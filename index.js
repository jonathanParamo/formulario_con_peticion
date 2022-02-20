const registrarDatosUsuario = () => {
  const primerNombre = document.getElementById("primerNombre").value;
  const segundoNombre = document.getElementById("segundoNombre").value;
  const primerApellido = document.getElementById("primerApellido").value;
  const segundoApellido = document.getElementById("segundoApellido").value;
  const cedula = parseFloat(document.getElementById("cedula").value);
  const telefono = parseFloat(document.getElementById("telefono").value);
  const edad = parseFloat(document.getElementById("edad").value);
  const direccion = document.getElementById("direccion").value;
  const userName = document.getElementById("userName").value;
  const correo = document.getElementById("correo").value;
  const estadoCivil = document.getElementById("estadoCivil").value;
  const estrato = document.getElementById("estrato").value;
  const idioma = checks();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const sexo = document.querySelector("input[name=sexo]:checked").value;

  if(primerNombre === ""){
    alert('debe ingresar un nombre')
  }else if(primerApellido === "" || segundoApellido === ""){
    alert('debe ingresar los dos apellidos')
  }else if(cedula === ""){
    alert('debe ingresar un numero de cedula')
  }else if(edad === "" || direccion === ""){
    alert('debe ingresar una edad y/o direccion')
  }else   if(userName === "" || correo === ""){
    alert('debe ingresar un nombre de usuario y/o correo electronico')
  }else if(estadoCivil === "" || estrato === ""){
    alert('debe ingresar su estado civil y/o estrato')
  }else{
    return true
  }

  const persona = {
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    cedula,
    telefono,
    edad,
    direccion,
    userName,
    correo,
    estadoCivil,
    estrato,
    idioma,
    sexo,
    fechaNacimiento
  }
  registrarPersona(persona)
  cancelar();
}

const cancelar = () => {
  document.getElementById("primerNombre").value = "";
  document.getElementById("segundoNombre").value = "";
  document.getElementById("primerApellido").value = "";
  document.getElementById("segundoApellido").value = "";
  document.getElementById("cedula").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("estadoCivil").value = "";
  document.getElementById("estrato").value = "";
  document.getElementById("fechaNacimiento").value = "";
}

const checks = () => {
  let idioma = [];
  if (document.getElementById('ingles').checked) {
    idioma.push("ingles")
  }
  if (document.getElementById('espanol').checked) {
    idioma.push('espanol')
  }
  if (document.getElementById('italiano').checked) {
    idioma.push("italiano")
  }
  if (document.getElementById('frances').checked) {
    idioma.push('frances')
  }
  if (document.getElementById('aleman').checked) {
    idioma.push("aleman")
  }
  return idioma;
}


const registrarPersona = (persona) => {

let url = 'https://safe-reef-90017.herokuapp.com/usuarios/crear';

fetch(url, {
  method: 'POST',
  body: JSON.stringify(persona),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
}

