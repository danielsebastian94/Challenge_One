const ingreseTexto = document.getElementById("ingreseTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const botonCopiar = document.getElementById("botonCopiar");
const munheco = document.getElementById("munheco");
const derechaInfo = document.getElementById("derechaInfo");
const derecha = document.getElementById("derechaInfo");



//e - enter
//o - ober
//i - imes
//a - ai
//u -ufat

let remplazar = [
    ["e", "enter"],
    ["o", "ober "],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    
    mensajeFinal.innerHTML = nuevoValor;

    munheco.classList.add("oculto");

    ingreseTexto.value = "";

    derechaInfo.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

const reset = () => {
    mensajeFinal.innerHTML = "";
    munheco.classList.remove("oculto")
    derechaInfo.style.display = "block";
    botonCopiar.style.display = "none";

    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingreseTexto.focus();
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase();
    if(texto != ""){
    function encriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
            };
        };
        return newText
    };
}else{
    alert("Ingrese texto a encriptar");
    reset();
}
    // const textoEncriptado = encriptar(texto);
    remplace(encriptar(texto));
 
});

botonDesencriptar.addEventListener("click", () =>{
    const texto = ingreseTexto.value.toLowerCase();
    if(texto != ""){
    function desencriptar(newText){
       for(let i = 0; i < remplazar.length; i++) {
        if(newText.includes(remplazar[i][1])){
          newText = newText.replaceAll(remplazar[i][1],remplazar[i][0])  
        };
       };
       return newText
    };
} else{
    alert("ingrese texto a Desencriptar")
    reset();
}

    //const textoDesencriptado = desencriptar(texto);

    remplace(desencriptar(texto));  

});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy')
    alert("texto copiado");

    reset();

    
})







