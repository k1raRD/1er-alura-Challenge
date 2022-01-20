//Archivo para encriptar el texto dado por el usuario

//palabras claves para encriptar
const keyWords = 
{
    "e":"enter",
    "i":"imes",
    "a":"ai",
    "o":"ober",
    "u":"ufat"
};

//haciendo el boton de encriptar funcional
let buttonEncrypt = document.getElementById("encrypt");
buttonEncrypt.addEventListener("click", textEncryptUser);


//funcion en la que se captura el texto del usuario para ser encriptado
function textEncryptUser ()
{
    let textUser = document.getElementById("text-user").value;
    let textEncrypted = encryptText(textUser);

    let result = document.getElementById("text-encrypt");
    result.value = textEncrypted;    
}

//funcion para llevar a cabo el encriptado del texto
function encryptText (textUser)
{
    let textEncrypted = "";

    for(const key in keyWords)
    {
        textEncrypted = textUser.replaceAll(key,keyWords[key]);

        textUser = textEncrypted;
    }
    return (textEncrypted);
}



