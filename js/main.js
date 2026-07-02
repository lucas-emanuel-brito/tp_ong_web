const btn = document.getElementById('boton-modo-oscuro');
const icono = btn.querySelector('.icono');
const texto = btn.querySelector('.texto');

// tema guardado
const temaGuardado = localStorage.getItem('tema');


if (temaGuardado === 'oscuro') {
  activarOscuro();
} else {
  activarClaro();
}


// Escuchar el clic en el botón
btn.addEventListener('click', () => {
  if (document.documentElement.classList.contains('modo-oscuro')) {
    activarClaro();
  } else {
    activarOscuro();
  }
});

function activarOscuro() {
  document.documentElement.classList.add('modo-oscuro');
  icono.textContent = '☀️';
  texto.textContent = 'Modo claro';
  localStorage.setItem('tema', 'oscuro');
}

function activarClaro() {
  document.documentElement.classList.remove('modo-oscuro');
  icono.textContent = '🌙';
  texto.textContent = 'Modo oscuro';
  localStorage.setItem('tema', 'claro');
}