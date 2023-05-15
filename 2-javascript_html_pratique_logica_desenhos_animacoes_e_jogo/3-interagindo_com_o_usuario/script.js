console.log("Starting ...");

var tela = document.querySelector("canvas.js");
var pincel = tela.getContext("2d"); 

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var cores = ["blue", "red", "green", "white", "black"];
var indiceCorAtual = 0;

function desenhaCirculo(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  pincel.fillStyle = cores[indiceCorAtual];
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);
  pincel.fill();

  console.log(x + "," + y);
}

tela.onclick = desenhaCirculo;

function mudaCor() {
  indiceCorAtual++;
  if (indiceCorAtual >= cores.length) {
    indiceCorAtual = 0;
  }
  return false;
}

tela.oncontextmenu = mudaCor;
