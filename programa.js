
var botaoCriptografar = document.querySelector("#enviar-criptografia");
botaoCriptografar.addEventListener("click", function(event){
    event.preventDefault(); //previne eventos padrão no formulário.
    
    var textoSemCriptografia = document.getElementById("texto1").value; //pegando conteudo de um textarea
    console.log(textoSemCriptografia);

    document.getElementById("texto2").innerHTML = criptografar(textoSemCriptografia); //textoSemCriptografia;

    

    limpaTexarea("texto1");
});

var botaoDesCriptografar = document.querySelector("#desfazer-criptografia");
botaoDesCriptografar.addEventListener("click", function(){

    var textoSemCriptografia = document.getElementById("texto1").value; //pegando conteudo de um textarea
    console.log("Testo: "+textoSemCriptografia);

    document.getElementById("texto2").innerHTML = descripttografar(textoSemCriptografia);    
    limpaTexarea("texto1");
});

var botaocopiar = document.querySelector("#copiar");
botaocopiar.addEventListener("click", function(){

    var textoCopiado = document.getElementById("texto2").value;
    var texto = navigator.clipboard.writeText(textoCopiado); //copia texto para a área de transferência

    limpaTexarea("texto2");
});


function limpaTexarea(textearea){
    document.getElementById(textearea).innerHTML = " ";
};


function criptografar(mensagem){
    var mensagem = mensagem.replaceAll(/e/gi, "enter");
    mensagem = mensagem.replaceAll(/i/gi, "imes");
    mensagem = mensagem.replaceAll(/a/gi, "ai");
    mensagem = mensagem.replaceAll(/o/gi, "ober");
    mensagem = mensagem.replaceAll(/u/gi, "ufat");
    var mensagemCriptografada = mensagem;

    return mensagemCriptografada.toLowerCase();
};

function descripttografar(mensagem){
    var mensagem = mensagem.replaceAll(/enter/gi,"e");
    mensagem = mensagem.replaceAll(/imes/gi,"i");
    mensagem = mensagem.replaceAll(/ai/gi, "a");
    mensagem = mensagem.replaceAll(/ober/gi, "o");
    mensagem = mensagem.replaceAll(/ufat/gi, "u");        
    var mensagemDesCriptografada = mensagem;

    return mensagemDesCriptografada.toLowerCase();
};