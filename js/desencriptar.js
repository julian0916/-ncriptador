var btnDesencriptar = document.querySelector("#btn-desencriptar").addEventListener("click", desencriptar);

function desencriptar(event){
    event.preventDefault();

    var entradaTexto = document.querySelector("#txtArea").value;
     entradaTexto = entradaTexto.replaceAll("enter","e")
     entradaTexto = entradaTexto.replaceAll("imes","i")
     entradaTexto = entradaTexto.replaceAll("ai", "a")
     entradaTexto = entradaTexto.replaceAll("ober","o")
     entradaTexto = entradaTexto.replaceAll("ufat","u")

    var mensaje = document.querySelector("#msg");
    msg.value = entradaTexto;
}

