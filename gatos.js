let gato;
function preload(){
  gato = loadJSON("./gatinho.json");
}
function setup() {
  createCanvas(400, 400); 
  console.log(gato) ;
}
function draw() {
  background(0);
  fill(255,110,20);
  text(gato.gatos[0].nome, 10,50);
  text(gato.gatos[1].nome, 10, 70);
  text(gato.gatos[0].revolution, 10, 90);
  text(gato.gatos[0].raiva, 10,110);
}
