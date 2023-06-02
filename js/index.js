Swal.fire({
  position: "top",
  title: "bienvenido a mi pagina",
  showConfirmButton: false,
  timer: 1700,
});

const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const contraseña = document.getElementById("contraseña").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;

  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("contraseña", contraseña);
  sessionStorage.setItem("fecha_nacimiento", fecha_nacimiento);


  Toastify({
    text: "Form submitted successfully!",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "green",
    stopOnFocus: true,
  }).showToast();
});

function checkEdad() {
  let fechaNacimiento = document.getElementById("fecha_nacimiento").value;
  let fechaActual = new Date();
  let fechaNacimientoDate = new Date(fechaNacimiento);
  let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  let mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
  if (
    mes < 0 ||
    (mes === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())
  ) {
    edad--;
  }
  if (edad < 18) {
    Toastify({
      text: "Lo siento, debes ser mayor de 18 años para acceder a esta página.",
      duration: 5000,
      gravity: "top",
      position: "right",
      backgroundColor: "red",
      stopOnFocus: true,
    }).showToast();
  } else {
    window.location.href = "bienvenida.html";
  }
}
