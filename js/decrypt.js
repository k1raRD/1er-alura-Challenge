
//dandole vida al boton de desencriptar
let buttonDecrypt = document.getElementById("decrypt");
buttonDecrypt.addEventListener("click", decryptTextUser);



//funcion para desencriptar el texto al usuario y darle el resultad
function decryptTextUser ()
{
    let textUser = document.getElementById("text-user").value;
    let textDecrypt = decryptText(textUser);

    let result = document.getElementById("text-encrypt");
    result.value = textDecrypt;
}



//Funcion para desencriptar el texto encriptado
function decryptText(textUser)
{
    let textEncrypted = "";
    for(const key in keyWords)
    {
        textEncrypted = textUser.replaceAll(keyWords[key],key);

        textUser = textEncrypted;
    }
    return (textEncrypted);
}

