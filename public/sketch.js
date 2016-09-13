var eCam;
var eButton;
var eSnapshots = [];


function setup() {
  createCanvas(320, 240);
  background(51);
  eCam = createCapture(VIDEO);
  eCam.size(320, 240);
  eCam.hide();
  eButton = createButton('snap');
  eButton.mousePressed(takeSnap);
}

function takeSnap(){
  eSnapshots.push(eCam.get());
  //var img = eCam.loadPixels(0, 0, width, height);
  //image(img, 0, 0, width, height);

}




function draw() {

  for(var i=0;i < eSnapshots.lenght; i++){
    image(eSnapshots[i], 0, 0, 50, 50);
  }

  //image(eCam, 0, 0, 320, 240);
  //filter('INVERT');
  //tint(255, mouseX,0);
  //image(capture, 0, 0, width, height);
}
