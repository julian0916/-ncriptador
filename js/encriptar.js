var btnEncriptar = document.querySelector("#btn-encriptar").addEventListener("click", encriptar);

function encriptar(event) {

    if (validarTexto(entradaTexto)) {
        alert("No se permiten mayúsculas ni acento.")
    } else {
        var entradaTexto = document.querySelector("#txtArea").value;
        entradaTexto = entradaTexto.replaceAll("e", "enter")
        entradaTexto = entradaTexto.replaceAll("i", "imes")
        entradaTexto = entradaTexto.replaceAll('a', 'ai')
        entradaTexto = entradaTexto.replaceAll("o", "ober")
        entradaTexto = entradaTexto.replaceAll("u", "ufat")

        msg.value = entradaTexto;
    }
}

function validarTexto(entradaTexto) {
    var esValidado = false;
    var entradaTexto = document.querySelector("#txtArea").value;

    if (entradaTexto.length === 0) {
        esValidado = true;
    } else {
        for (var i = 0; i < entradaTexto.length; i++) {
            var letraActual = entradaTexto.charAt(i);
            if (letraActual === letraActual.toUpperCase() || letraActual === 'á' || letraActual === 'é'
                || letraActual === 'i' || letraActual === 'ó' || letraActual === 'ú') {
                esValidado = true;
                break;
            }
        }
        return esValidado;
    }
}

