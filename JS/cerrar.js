const cerrar = document.getElementById('cerrar')

cerrar.addEventListener('click', () => {
    window.localStorage.setItem('sesion', 0)
    window.location.href = "usuario.html"
})