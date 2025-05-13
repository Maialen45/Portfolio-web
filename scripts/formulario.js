let mensajes = JSON.parse(localStorage.getItem("mensajesContacto")) || [];

const form = document.getElementById("formulario");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarDatos() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const asunto = document.getElementById("asunto").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !asunto || !mensaje) {
    alert("Por favor, complete todos los campos.");
    return null;
  } else if (!emailRegex.test(email)) {
    alert(
      "Por favor, introduzca un email válido.\nEjemplo: ejemplo@ejemplo.com"
    );
    return null;
  }

  return { nombre, email, asunto, mensaje };
}

function guardarMensaje() {
  const datosValidados = validarDatos();
  if (!datosValidados) return;

  const datos = { ...datosValidados, fecha: new Date().toLocaleDateString() };

  mensajes.push(datos);

  localStorage.setItem("mensajesContacto", JSON.stringify(mensajes));

  alert("El mensaje se ha enviado correctamente");
  form.reset();
}

document.getElementById("enviar").addEventListener("click", guardarMensaje);
