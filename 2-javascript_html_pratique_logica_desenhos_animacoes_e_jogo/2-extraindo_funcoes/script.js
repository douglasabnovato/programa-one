console.log("Starting ... ");

document.write("<h3>Funções canvas</h3>");

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 50, 50);
pincel.strokeStyle = "black";
pincel.strokeRect(0, 0, 50, 50);

pincel.fillRect(50, 0, 50, 50);
pincel.strokeRect(50, 0, 50, 50);

pincel.fillRect(100, 0, 50, 50);
pincel.strokeRect(100, 0, 50, 50);

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "green";
pincel.fillRect(10, 100, 50, 50);
pincel.strokeStyle = "black";
pincel.strokeRect(10, 100, 50, 50);

function desenhaQuadradoVermelho() {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = "red";
  pincel.fillRect(80, 60, 50, 50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(80, 60, 50, 50);
}

desenhaQuadradoVermelho();

function desenhaQuadrado(x, y, cor) {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = cor;
  pincel.fillRect(x, y, 50, 50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, 50, 50);
}

desenhaQuadrado(100, 150, "#D4AC0D");
desenhaQuadrado(150, 150, "#D4AC0D");
desenhaQuadrado(200, 150, "#D4AC0D");

function desenhaQuadrado2(x, y, cor) {
  var tela = document.querySelector("canvas");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = cor;
  pincel.fillRect(x, y, 50, 50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, 50, 50);
}
var x = 0;

while (x < 600) {
  desenhaQuadrado2(x, 290, "crimson");
  x = x + 50;
}

for (var x = 0; x < 600; x = x + 50) {
  desenhaQuadrado2(x, 220, "yellow");
}

var tela = document.querySelector("canvas.flor");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(10, 10, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaFlor(x, y) {
  desenhaCirculo(x, y + 20, 10, "blue");
  desenhaCirculo(x, y, 10, "red");
  desenhaCirculo(x, y - 20, 10, "yellow");
  desenhaCirculo(x - 20, y, 10, "orange");
  desenhaCirculo(x + 20, y, 10, "black");
}

desenhaFlor(300, 200);

function desenhaRetangulo(x, y, largura, altura, cor) {
  var tela = document.querySelector("canvas.barras");
  var pincel = tela.getContext("2d");

  pincel.fillStyle = cor;
  pincel.fillRect(x, y, largura, altura);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, largura, altura);
}

function desenhaTexto(x, y, texto) {
  var tela = document.querySelector("canvas.barras");
  var pincel = tela.getContext("2d");

  pincel.font = "15px Georgia";
  pincel.fillStyle = "black";
  pincel.fillText(texto, x, y);
}

function desenhaBarra(x, y, serie, cores, texto) {
  desenhaTexto(x, y - 10, texto);

  var somaAltura = 0;
  for (var i = 0; i < serie.length; i++) {
    var altura = serie[i];
    desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
    somaAltura = somaAltura + altura;
  }
}

var cores = ["blue", "green", "yellow", "red"];
var serie2015 = [50, 25, 20, 5];
var serie2016 = [65, 20, 13, 2];

desenhaBarra(50, 50, serie2015, cores, "2015");
desenhaBarra(150, 50, serie2016, cores, "2016");
