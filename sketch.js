var canvas;
var value;
var mySlider;

function setup() {
  pos=0;
  canvas1 = createCanvas(windowWidth,windowHeight);
  myButton = createButton('test');
  myButton.mousePressed(changeColor);
  value=200;
  mySlider = createSlider(0,100,50);
}

function changeColor(){
  value = 150;
}



function draw() {
  value=map(mouseY,0,height,0,255);
  background(value);

  //fill(255,0,0);
  ellipse(100, 100, mySlider.value(), mySlider.value());
  myButton.position(200,100);
  mySlider.position(300,100);

}