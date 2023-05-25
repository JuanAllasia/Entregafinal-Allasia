Swal.fire({
  position: "top",
  title: "bienvenido a mi pagina",
  showConfirmButton: false,
  timer: 1700,
});

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  toString = function () {
    return this.nombre + "( $" + this.precio.toFixed(2) + ")";
  };
}

let misproductos = [];

const formProducto = document.getElementById("formulario-producto");
formProducto.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const unproducto = new Producto(nombre, precio);
  misproductos.push(unproducto);
  console.log(
    "la cantidad de productos que hay en mi lista ",
    misproductos.length
  );
  localStorage.setItem("almacen", JSON.stringify(misproductos));
  console.log(
    "los productos registrados son: ",
    localStorage.getItem("almacen")
  );
  formProducto.reset();
});

if (localStorage.getItem("almacen")) {
  const storedData = JSON.parse(localStorage.getItem("almacen"));

  storedData.forEach((producto) => {
    const unproducto = new Producto(producto.nombre, producto.precio);
    unproducto.vendido = producto.vendido;

    misproductos.push(unproducto);
  });

  const listaProductos = document.getElementById("lista-productos");
  misproductos.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = producto.toString();
    listaProductos.appendChild(li);
  });
}

const btn = document.querySelector("#mybtn");
btn.addEventListener("click", () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "El producto a sido guardado,por favor refresca la pagina",
    showConfirmButton: false,
    timer: 2500,
  });
});

