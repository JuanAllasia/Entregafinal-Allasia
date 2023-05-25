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
      document.getElementById("resultado").innerHTML =
        "Lo siento, debes ser mayor de 18 años para acceder a esta página.";
    } else {
      window.location.href = "bienvenida.html";
    }
  }