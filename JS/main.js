let stockProductos = [
    { id: 1, nombre: "Redmi Note 11S", cantidad: 1, precio: 210, img: 'https://i.ibb.co/2MyvY8k/redmi-note-11s-5g.png' },
    { id: 2, nombre: "Galaxy Buds2", cantidad: 1, precio: 125, img: 'https://i.ibb.co/FH6pydS/GNB-thumbnail-galaxy-buds2.webp' },
    { id: 3, nombre: "Silicone Case", cantidad: 1, precio: 49, img: 'https://i.ibb.co/FXgbhnt/MN653.jpg' },
    { id: 4, nombre: "Amazfit GTR 3 Pro", cantidad: 1, precio: 230, img: 'https://i.ibb.co/4JNzWvd/3e73a5d17e565bbdba35f1e33fc583b5-2048x2048.webp' }
]

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let total = document.getElementById('Total');

const contenedorTel = document.getElementById('contenedorTel')
const contenedorCover = document.getElementById('contenedorCover')
const contenedorAud = document.getElementById('contenedorAud')
const contenedorSmart = document.getElementById('contenedorSmart')
const contenedorCarrito = document.getElementById('ContCar')
const botonVaciar = document.getElementById('Vaciar')
const comprar = document.getElementById('Comprar')
const usuario = document.getElementById('usuario')


usuario.addEventListener('click', () => {
    if ((window.localStorage.getItem('sesion') == 1) || (window.localStorage.getItem('sesion') == 2)) {
        window.location.href = "perfil.html"
    }else{
        window.location.href = "usuario.html"
    }
})

comprar.addEventListener('click', () => {
    if ((localStorage.getItem('sesion') == 1) || (localStorage.getItem('sesion') == 2)) {
        carrito.length = 0
        actualizarCarrito()
        window.alert("Compra realizada con exito")
        window.location.href = "index.html"
    }else{
        window.alert("Inicie sesion primero")
    }

})

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
        <button id="agregar${producto.id}"><img src="https://i.ibb.co/wC43T4H/icons8-add-shopping-cart-480px.png" alt="Add Shopping cart"></button>
        `
            if (contenedorTel != null) {
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
        <button id="agregar${producto.id}"><img src="https://i.ibb.co/wC43T4H/icons8-add-shopping-cart-480px.png" alt="Add Shopping cart"></button>
        `
            if (contenedorAud != null) {
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
        <button id="agregar${producto.id}"><img src="https://i.ibb.co/wC43T4H/icons8-add-shopping-cart-480px.png" alt="Add Shopping cart"></button>
        `
            if (contenedorCover != null) {
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
        <button id="agregar${producto.id}"><img src="https://i.ibb.co/wC43T4H/icons8-add-shopping-cart-480px.png" alt="Add Shopping cart"></button>
        `
            if (contenedorSmart != null) {
                contenedorSmart.appendChild(div)


                const boton = document.getElementById(`agregar${producto.id}`)

                boton.addEventListener('click', () => {
                    agregarAlCarrito(producto.id)
                })
            }
        }
    }
})

const disminuir = (prodId) => {
    let contador = 0
    const item = stockProductos.find((prod) => prod.id === prodId)
    for (let index = 0; index < carrito.length; index++) {
        if (carrito[index].id === item.id) {
            carrito[index].cantidad = carrito[index].cantidad - 1;
            contador = contador - 1
            stockProductos.forEach((producto) => {
                if (prodId === producto.id) {
                    carrito[index].precio = producto.precio * carrito[index].cantidad
                }
            });
        }
        if (carrito[index].cantidad == 0) {
            eliminarDelCarrito(carrito[index].id)
        }
    }

    actualizarCarrito()
}

const agregarAlCarrito = (prodId) => {
    let contador = 0
    const item = stockProductos.find((prod) => prod.id === prodId)
    for (let index = 0; index < carrito.length; index++) {
        if (carrito[index].id === item.id) {
            carrito[index].cantidad = carrito[index].cantidad + 1;
            contador = contador + 1
            carrito[index].precio = carrito[index].cantidad * item.precio
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
    carrito.splice(indice, 1)
    actualizarCarrito()
}


function actualizarCarrito() {
    contenedorCarrito.innerHTML = ""
    let pagar = 0
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <img src="${prod.img}" alt="">
        <h5>${prod.nombre}</h5>
        <p>Precio: $ ${prod.precio}</p>
        <div class="CantidadProd">
            <button onclick="disminuir(${prod.id})">
                <img src="https://i.ibb.co/cxNb5k7/icons8-minus-480px-1.png" alt="Minus">
            </button>
            <input type="text" value="${prod.cantidad}">
            <button onclick="agregarAlCarrito(${prod.id})">
                <img src="https://i.ibb.co/F6XDLR6/icons8-Plus-480px-3.png" alt="Plus">
            </button>
        </div>
        <button onclick="eliminarDelCarrito(${prod.id})"><img src="https://i.ibb.co/tD8Fsz0/icons8-trash-480px.png" alt="eliminar"></button>
        `
        contenedorCarrito.appendChild(div)
        pagar = prod.precio + pagar
    })
    total.textContent = "Total: $" + pagar
    localStorage.removeItem('carrito')
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

