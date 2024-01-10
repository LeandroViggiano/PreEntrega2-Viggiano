function verificarEdad() {
  let edadUsuario;

  do {
      edadUsuario = prompt("Por favor, ingresa tu edad");
      if(edadUsuario < 0 || edadUsuario > 95) {
          alert("Edad no válida. Por favor, ingresa una edad entre 0 y 95.");
      } else if(edadUsuario >= 0 && edadUsuario <= 25) {
          alert("No tiene la edad necesaria para cuidar a un animal");
      }
  } while(edadUsuario < 0 || edadUsuario > 95);

  if(edadUsuario > 25 && edadUsuario <= 95) {
      verificarSueldo();
  }
}

function verificarSueldo() {
  let sueldoUsuario = prompt("Por favor, ingresa tu sueldo en dólares");
  if(sueldoUsuario > 250) {
      alert("Usted se encuentra en condiciones de adoptar un animal");
  } else {
      alert("No puede adoptar un animal");
  }
}

verificarEdad();

// --------------------------------
//Script para el modo oscuro
var themeSwitch = document.getElementById('theme-switch');

// Comprueba si el modo oscuro está activado en la configuración local
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  themeSwitch.checked = true;
}

// Agrega un controlador de eventos al interruptor
themeSwitch.addEventListener('change', function(event) {
  // Si el interruptor está activado, activa el modo oscuro
  if (event.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    // De lo contrario, desactiva el modo oscuro
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
});
//-----------------------------Fin del script para el modo oscuro
