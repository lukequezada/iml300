document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
    textAlign(LEFT);
    textSize(30);
    let x = 0;
    let y = 0;
}

//function mouseClicked() {
//  text('nope.', mouseX, mouseY, 80, 80);
//  fill(random(0, 255), random(0, 255), random(0, 255));
//}


function mousePressed() {
  y = 1;
  let words = ['nope.', 'nah', 'no', 'yeah, no.', 'I dont want no scrubs'];
  let word = random(words);
  if (x == 1 && y == 1) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    text(word, mouseX, mouseY, 300, 200);
    x = 0;
  }
}

function mouseReleased() {
  y = 0;
}

function keyPressed() {
  if (keyCode == (SHIFT)) {
    x = 1;
  }
}

function keyReleased() {
  x = 0;
}