
// const expresiones = {
//   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//   password: /^.{4,12}$/, // 4 a 12 digitos.
//   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   telefono: /^\d{7,14}$/, // 7 a 14 numeros.
// };


/* 
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar=true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }

}) */

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 6) {
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }
  if (pass.value.length < 8) {
    warnings += `La contraseña no es valida <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
});