let stockProductos = [
    { id: 1, nombre: "Redmi Note 11S", cantidad: 1, precio: 210, img: 'https://i.ibb.co/2MyvY8k/redmi-note-11s-5g.png' },
    { id: 2, nombre: "Galaxy Buds2", cantidad: 1, precio: 125, img: 'https://i.ibb.co/FH6pydS/GNB-thumbnail-galaxy-buds2.webp' },
    { id: 3, nombre: "Silicone Case", cantidad: 1, precio: 49, img: 'https://i.ibb.co/FXgbhnt/MN653.jpg' },
    { id: 4, nombre: "Amazfit GTR 3 Pro", cantidad: 1, precio: 230, img: 'https://i.ibb.co/4JNzWvd/3e73a5d17e565bbdba35f1e33fc583b5-2048x2048.webp' }
]

let perfiles = [
    { id: 1, nombre: "Gabriela Morales Jaime", correo: "Gabymorales@gmail.com", img: "https://i.ibb.co/V9S8pKY/79873309-2522466751359654-7662761078186573824-n.jpg" },
    { id: 2, nombre: "Howard Emilio Suarez", correo: "Howardescerrato@gmail.com", img: "https://i.ibb.co/zG103MF/251604466-3115695798664195-6156926377843060704-n.jpg" }
]

let contador = stockProductos.length;
let adminProd = stockProductos;
const contenedorProd = document.getElementById('contenedorProd')
const agregar = document.getElementById('agregar')
const compras = document.getElementById('compras')
const perfil = document.getElementById('informacion')

if (perfil != null) {
    perfiles.forEach((usuario) => {
        if (window.localStorage.getItem('sesion') === "1") {
            if (usuario.id === 1) {
                const div = document.createElement('div')
                div.classList.add('informacion')
                div.innerHTML = `
                <img src="${usuario.img}" alt="foto">
                <div class="info">
                    <h3>${usuario.nombre}</h3>
                    <p>${usuario.correo}</p>
                    <p></p>
                </div>
                <button id="cerrar" class="botCre">Cerrar Sesión</button>
            `
                perfil.appendChild(div)
            }
        } if (window.localStorage.getItem('sesion') === "2") {
            if (usuario.id === 2) {
                const div = document.createElement('div')
                div.classList.add('informacion')
                div.innerHTML = `
                <img src="${usuario.img}" alt="foto">
                <div class="info">
                    <h3>${usuario.nombre}</h3>
                    <p>${usuario.correo}</p>
                    <p></p>
                </div>
                <button id="cerrar" class="botCre">Cerrar Sesión</button>
            `
                perfil.appendChild(div)
            }
        }
    })
}

if (compras != null) {
    stockProductos.forEach((producto) => {
        if (window.localStorage.getItem('sesion') === "1") {
            if (producto.id % 2 === 0) {
                const div = document.createElement('div')
                div.classList.add('productoEnCarrito')
                div.innerHTML = `
                <img src="${producto.img}" alt="">
                <h3>${producto.nombre}</h3>
                <p>Precio: $ ${producto.precio}</p>
                <p>Cantidad: $ ${producto.cantidad}</p>
                `
                compras.appendChild(div)
            }
        } else {
            if (producto.id % 2 === 1) {
                const div = document.createElement('div')
                div.classList.add('productoEnCarrito')
                div.innerHTML = `
                <img src="${producto.img}" alt="">
                <h3>${producto.nombre}</h3>
                <p>Precio: $ ${producto.precio}</p>
                <p>Cantidad: $ ${producto.cantidad}</p>
                `
                compras.appendChild(div)
            }
        }
    })
}

agregar.addEventListener('click', function (evt) {
    contador = contador + 1;
    let nuevo = { id: contador, nombre: document.form.Nombre.value, precio: document.form.Precio.value, img: document.form.image.value };
    adminProd.push(nuevo)
    actualizarProducto()
    window.form.reset();
    evt.preventDefault();
    return false;
})

adminProd.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
    <img src="${producto.img}" alt="">
    <h3>${producto.nombre}</h3>
    <p>Precio: $ ${producto.precio}</p>
    <button onclick="eliminarDelCarrito(${producto.id})"><img src="https://i.ibb.co/tD8Fsz0/icons8-trash-480px.png" alt="eliminar"></button>
    `
    contenedorProd.appendChild(div)

})

const eliminarDelCarrito = (prodId) => {
    const item = adminProd.find((prod) => prod.id === prodId)
    const indice = adminProd.indexOf(item)
    adminProd.splice(indice, 1)
    actualizarProducto()
}

function actualizarProducto() {
    contenedorProd.innerHTML = ""
    adminProd.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
        <img src="${producto.img}" alt="">
        <h3>${producto.nombre}</h3>
        <p>Precio: $ ${producto.precio}</p>
        <button onclick="eliminarDelCarrito(${producto.id})"><img src="https://i.ibb.co/tD8Fsz0/icons8-trash-480px.png" alt="eliminar"></button>
        `
        contenedorProd.appendChild(div)
    })
}