function validarTexto() {

    var textoIngresado = document.getElementById("textArea").value;

    if (/[A-Z]/.test(textoIngresado) || (/[á,é,í,ó,ú]/.test(textoIngresado)) || (/[0-9]/)) {

        alert("Error")
        validacion = false;

    } else if ((textoIngresado == "")) {

        alert("vacio");
        validacion = false;
    } else {
        validacion = true;
    }
}