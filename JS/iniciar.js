const iniciar = document.getElementById('Iniciar')


iniciar.addEventListener('click', function (evt) {
    if (document.form.correo.value === "Admin") {
        window.location.href = "administracion.html";
        evt.preventDefault();
        return false;
    }else if (document.form.correo.value == 'Gabriela') {
        window.localStorage.setItem('sesion', 1)
        window.location.href = "index.html"
        evt.preventDefault();
        return false;
    }else if (document.form.correo.value == 'Howard') {
        window.localStorage.setItem('sesion', 2)
        window.location.href = "index.html"
        evt.preventDefault();
        return false;
    }else{
        window.alert("Usuario o Contraseña incorrectos")
        window.form.reset();
        evt.preventDefault();
        return false;
    }
})