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

const formProducto = document.getElementById('formulario-producto');
formProducto.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const isDuplicate = misproductos.some((producto) => producto.nombre.toUpperCase() === nombre.toUpperCase());
  if (isDuplicate) {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'El producto ya existe en la lista',
      showConfirmButton: false,
      timer: 2500,
    });
    return;
  }

  const unproducto = new Producto(nombre, precio);
  misproductos.push(unproducto);

  Toastify({
    text: 'La cantidad de productos que hay en mi lista: ' + misproductos.length,
    duration: 3000,
  }).showToast();
  
  localStorage.setItem('almacen', JSON.stringify(misproductos));
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
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;

  if (nombre === '' || precio === '') {
    return;
  }

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "El producto ha sido guardado, por favor refresca la página",
    showConfirmButton: false,
    timer: 2500,
  });
});


setInterval(() => {
  Toastify({
    text: "Gracias por seguir navegando",
    duration: 5000,
  }).showToast();
}, 300000);

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (misproductos.length > 0) {
        resolve(misproductos);
      } else {
        reject([]);
      }
    }, 2000);
  });
};

let productos = [];

const renderProductos = (arr) => {
  
};




fetch('../data/posts.json')
  .then(response => response.json())
  .then(data => {

    const tableBody = document.querySelector('#mitabla tbody');

    data.forEach(item => {

      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = item.id;
      row.appendChild(idCell);
      const nameCell = document.createElement('td');
      nameCell.textContent = item.nombre;
      row.appendChild(nameCell);
      const precioO = document.createElement('td');
      precioO.textContent = item.precio;
      row.appendChild(precioO);

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.log('Ha ocurrido un error:', error);
  });