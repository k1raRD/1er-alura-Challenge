//Archivo para el boton de copiar

let buttonCopy = document.getElementById("copy");
buttonCopy.addEventListener("click", copyText);

function copyText ()
{
    let textCopied = document.getElementById("text-encrypt").value;
    navigator.clipboard.writeText(textCopied);
};