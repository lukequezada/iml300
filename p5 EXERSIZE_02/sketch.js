/* in this sketch, I connected p5 to an arduino. This was an incredibly difficult process as the web browser does not have access to serial ports so an API must be used. The user uses their mouse to activate 5V DC motors hooked up to the arduino to activate, drawing in real space. This piece is a proof of concept. All of the code on the arduino and p5 side is suitable for a multiple motor set-up, however, I only had access to one DC motor so my prototype is a stationary version of the proposed final product. A complete device would utilize 2-4 motors to give the user more control of the shape of the drawing. 

I used the p5SerialPort API + corresponding library for this project. I refrenced sample code produced by the API application 

In order to use the sketch, the arduino must be connected to the device and appropriate serial port names must be instantiated in the sketch. The API must also be open and connected to the serial port.
*/


var serial;
var portName = 'COM5';
var inData;
var outByte;


function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort();
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.open(portName);
  ellipseMode(CENTER);
}

function serialEvent() {
  var inByte = serial.read();
  inData = inByte;
}

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  ellipse(0, 0, 160, 160);
  // text("incoming value: " + inData, 30, 30);

  //DEFINE MOVEMENT
  //no x no y
  if (mouseX < 80 && mouseY < 80) {
    outByte = 0;
    serial.write(outByte);
  }

  //x no y
  if (mouseX > 80 && mouseY < 80) {
    outByte = 1;
    serial.write(outByte);
  }

  //x y
  if (mouseX > 80 && mouseY > 80) {
    outByte = 2;
    serial.write(outByte);
  }

  //no x y
  if (mouseX < 80 && mouseY > 80) {
    outByte = 3;
    serial.write(outByte);
  }

}

function keyPressed() {
  if (key === 'h' || key === 'l') {
    serial.write(key);
  }
}

function mousePressed() {
  outByte = 1;
  serial.write(outByte);
}

function mouseReleased() {
  outByte = 0;
  serial.write(outByte);
}