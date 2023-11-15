// Obtén el elemento del interruptor
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