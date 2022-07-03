let stockProductos = [
    { id: 1, nombre: "Redmi Note 11S", cantidad: 1, precio: 210, img: 'https://i.ibb.co/2MyvY8k/redmi-note-11s-5g.png' },
    { id: 2, nombre: "Galaxy Buds2", cantidad: 1, precio: 125, img: 'https://i.ibb.co/FH6pydS/GNB-thumbnail-galaxy-buds2.webp'},
    { id: 3, nombre: "Silicone Case", cantidad: 1, precio: 49, img: 'https://i.ibb.co/FXgbhnt/MN653.jpg'},
    { id: 4, nombre: "Amazfit GTR 3 Pro", cantidad: 1, precio: 230, img: 'https://i.ibb.co/4JNzWvd/3e73a5d17e565bbdba35f1e33fc583b5-2048x2048.webp'}
]

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const contenedorTel = document.getElementById('contenedorTel')
const contenedorCover = document.getElementById('contenedorCover')
const contenedorAud = document.getElementById('contenedorAud')
const contenedorSmart = document.getElementById('contenedorSmart')
const contenedorCarrito = document.getElementById('ContCar')
const botonVaciar = document.getElementById('Vaciar')

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    actualizarCarrito()
   if (contenedorTel != null) {
    if (producto.id === 1) {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src="${producto.img}" alt="">
        <h3>${producto.nombre}</h3>
        <p>Precio: $ ${producto.precio}</p>
        <button id="agregar${producto.id}">Agregar</button>
        `
        if(contenedorTel != null){
        contenedorTel.appendChild(div)
    
    
        const boton = document.getElementById(`agregar${producto.id}`)
    
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    }
    }
   }
   if (contenedorAud != null) {
    if (producto.id === 2) {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src="${producto.img}" alt="">
        <h3>${producto.nombre}</h3>
        <p>Precio: $ ${producto.precio}</p>
        <button id="agregar${producto.id}">Agregar</button>
        `
        if(contenedorAud != null){
        contenedorAud.appendChild(div)
    
    
        const boton = document.getElementById(`agregar${producto.id}`)
    
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    }
    }
   }
   if (contenedorCover != null) {
    if (producto.id === 3) {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src="${producto.img}" alt="">
        <h3>${producto.nombre}</h3>
        <p>Precio: $ ${producto.precio}</p>
        <button id="agregar${producto.id}">Agregar</button>
        `
        if(contenedorCover != null){
        contenedorCover.appendChild(div)
    
    
        const boton = document.getElementById(`agregar${producto.id}`)
    
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    }
    }
   }
   if (contenedorSmart != null) {
    if (producto.id === 4) {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src="${producto.img}" alt="">
        <h3>${producto.nombre}</h3>
        <p>Precio: $ ${producto.precio}</p>
        <button id="agregar${producto.id}">Agregar</button>
        `
        if(contenedorSmart != null){
        contenedorSmart.appendChild(div)
    
    
        const boton = document.getElementById(`agregar${producto.id}`)
    
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    }
    }
   }
})

const agregarAlCarrito = (prodId) => {
    let contador = 0
    const item = stockProductos.find((prod) => prod.id === prodId)
    for (let index = 0; index < carrito.length; index++) {
        if (carrito[index].id === item.id) {
            carrito[index].cantidad = carrito[index].cantidad + 1;
            contador = contador + 1
            stockProductos.forEach((producto) => {
                if (prodId === producto.id) {
                    carrito[index].precio = producto.precio * carrito[index].cantidad
                }
            });
        }
    }
    if (contador === 0) {
        carrito.push(item)
    }
    
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}
function actualizarCarrito(){
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
    localStorage.removeItem('carrito')
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

