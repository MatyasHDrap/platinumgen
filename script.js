function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('show');
}
function toggleChat() {
  const box = document.getElementById('chat-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}
function sendChat() {
  const input = document.getElementById('chat-input');
  const log = document.getElementById('chat-log');
  if (input.value.trim() !== '') {
    log.innerHTML += `<div><b>Tú:</b> ${input.value}</div>`;
    log.scrollTop = log.scrollHeight;
    input.value = '';
    setTimeout(() => {
      log.innerHTML += `<div><b>Asistente:</b> Estamos procesando tu consulta...</div>`;
      log.scrollTop = log.scrollHeight;
    }, 1000);
  }
}
document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function addPost(event) {
  event.preventDefault();
  const nombre = document.getElementById('foro-nombre').value;
  const mensaje = document.getElementById('foro-mensaje').value;
  if (nombre && mensaje) {
    const foro = document.getElementById('foro-publicaciones');
    foro.innerHTML += `<div><b>${nombre}</b>: ${mensaje}</div>`;
  }
}
function submitForm(event, tipo) {
  event.preventDefault();
  alert(`Formulario de ${tipo} enviado correctamente.`);
}
