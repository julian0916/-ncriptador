const btnEncriptar = document.querySelector("#btn-encriptar").addEventListener("click", encriptar);

function encriptar(event) {
if (validarTexto(entradaTexto)) {
  alert("Ingrese letras minúsculas, sin acento.")
  console.log(entradaTexto);
} else {

  
    var entradaTexto = document.querySelector("#txtArea").value;
    entradaTexto = entradaTexto.replaceAll("e", "enter");
    entradaTexto = entradaTexto.replaceAll("i", "imes");
    entradaTexto = entradaTexto.replaceAll("a", "ai");
    entradaTexto = entradaTexto.replaceAll("o", "ober");
    entradaTexto = entradaTexto.replaceAll("u", "ufat");

    msg.value = entradaTexto;
    console.log(entradaTexto);
   }
  }

