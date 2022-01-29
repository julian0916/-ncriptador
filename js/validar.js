function validarTexto(entradaTexto) {
  var esValidado = false;
  var entradaTexto = document.querySelector("#txtArea").value;
  
  if (entradaTexto) {
    for (var i = 0; i < entradaTexto.length; i++) {
      let letraActual = entradaTexto.charAt(i);
      if (
        letraActual == letraActual.toUpperCase() ||
        letraActual == "á" ||
        letraActual == "é" ||
        letraActual == "i" ||
        letraActual == "ó" ||
        letraActual == "ú"
      ) {
        esValidado = true;
        break;
        }
      if (letraActual == " ") {
      esValidado=false;
    }
  }
  return esValidado;
}
}