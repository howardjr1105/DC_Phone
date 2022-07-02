let stockProductos = [
    { id: 1, nombre: "Redmi Note 11S", cantidad: 1, precio: 210, img: 'https://i.ibb.co/2MyvY8k/redmi-note-11s-5g.png' }
]

let carrito = []

const contenedorProductos = document.getElementById('contenedorProd')
const contenedorCarrito = document.getElementById('contenedorCarrito')

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src="${producto.img}" alt="">
    <h3>${producto.nombre}</h3>
    <p>Precio: $ ${producto.precio}</p>
    <button id="agregar${producto.id}">Agregar</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $ ${prod.precio}</p>
        <p>Cantidad: ${prod.cantidad}</p>
        <button onclick="eliminarDelCarrito(${prod.id})">Eliminar</button>
        `
        contenedorCarrito.appendChild(div)
        
    })
}
