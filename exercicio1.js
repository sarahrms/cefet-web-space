// Faça o exercício dos parágrafos aqui
let listaBotoes = document.getElementsByClassName("botao-expandir-retrair");
let listaEstados = [];

for (let botao of listaBotoes) {
  listaEstados[botao.index] = false;
  botao.addEventListener("click", function() {
    if(listaEstados[botao.index]===false){
      botao.innerHTML = "-";
      botao.parentElement.className = "expandido";
      listaEstados[botao.index] = true;
    }
    else {
        botao.innerHTML = "+";
        botao.parentElement.className = "";
        listaEstados[botao.index] = false;
    }
  });
}








// Este arquivo ainda não está incluído no arquivo HTML
