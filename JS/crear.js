const crear = document.getElementById('crear')

crear.addEventListener('click', function(evt) {
    if (window.form.correo.value != "") {
        window.alert("Registro exitoso, porfavor inicie sesion")
        window.location.href = "usuario.html"
        evt.preventDefault();
        return false;
    }
})