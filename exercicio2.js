// Faça o exercício da galeria de imagens aqui
let img = document.getElementById("slide");

let currentIndex = 0;
const numberImg = 5;

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/';
const todasAsImagens = [
  'philae-parts.jpg',
  'philae-rosetta.jpg',
  'philae-separation.jpg',
  'philae-67-picture.jpg',
  'philae-collecting.jpg'
];

let botaoAnterior = document.getElementById("anterior");
let botaoProximo = document.getElementById("proximo");

botaoAnterior.addEventListener("click", function() {
  if(currentIndex > 0){
    currentIndex --;
  }
  else {
    currentIndex = numberImg-1;
  }
  updateImage();
});

botaoProximo.addEventListener("click", function() {
  if(currentIndex < (numberImg-1)){
    currentIndex ++;
  }
  else {
    currentIndex = 0;
  }
  updateImage();
});

function updateImage(){
  img.src = servidorDasImagens + todasAsImagens[currentIndex];
}
