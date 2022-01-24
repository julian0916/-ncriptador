var btnCopy = document.querySelector("#btn-copy").addEventListener("click", copyToClipBoard);

function copyToClipBoard(event) {

    var content = document.getElementById("msg");
    
    content.select();
    document.execCommand('copy');

    alert("Texto copiado!");
}
    
