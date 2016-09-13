// 8.4 Loading JSON data from a URL (Asynchronous Callbacks!) - p5.js Tutorial
// JSON Formatter - Chrome Web Store - Google
// https://developer.feedly.com/v3/
// https://tonicdev.com/npm/feedly-js
// https://github.com/charleslavon/feedly-get
// https://developer.chrome.com/apps/app_usb
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.onscroll = function scrolling(){
  //println(pageY);
  println(window.pageYOffset);
}


function draw() {
  //value=map(window.pageYOffset,0,height/2,0,255);
  background(value);

  //fill(255,0,0);
  ellipse(100, 100, mySlider.value(), mySlider.value());
  myButton.position(200,100);
  mySlider.position(300,100);

}
