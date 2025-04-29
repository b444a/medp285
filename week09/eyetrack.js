function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  describe('Four colorful rectangular eyes follow the cursor across the screen.');
}

function draw() {
  background(240, 30, 30); // soft red background

  // Draw top-left eye
  let eye1X = 150;
  let eye1Y = 150;
  let angle1 = atan2(mouseY - eye1Y, mouseX - eye1X);

  push();
  translate(eye1X, eye1Y);
  fill(60, 80, 100); // yellow
  rect(0, 0, 60, 60, 10);
  rotate(angle1);
  fill(0);
  rect(15, 0, 20, 20, 5);
  pop();

  // Draw top-right eye
  let eye2X = 350;
  let eye2Y = 150;
  let angle2 = atan2(mouseY - eye2Y, mouseX - eye2X);

  push();
  translate(eye2X, eye2Y);
  fill(120, 80, 100); // green
  rect(0, 0, 60, 60, 10);
  rotate(angle2);
  fill(0);
  rect(15, 0, 20, 20, 5);
  pop();

  // Draw bottom-left eye
  let eye3X = 150;
  let eye3Y = 350;
  let angle3 = atan2(mouseY - eye3Y, mouseX - eye3X);

  push();
  translate(eye3X, eye3Y);
  fill(180, 80, 100); // cyan
  rect(0, 0, 60, 60, 10);
  rotate(angle3);
  fill(0);
  rect(15, 0, 20, 20, 5);
  pop();

  // Draw bottom-right eye
  let eye4X = 350;
  let eye4Y = 350;
  let angle4 = atan2(mouseY - eye4Y, mouseX - eye4X);

  push();
  translate(eye4X, eye4Y);
  fill(300, 80, 100); // pink
  rect(0, 0, 60, 60, 10);
  rotate(angle4);
  fill(0);
  rect(15, 0, 20, 20, 5);
  pop();
}

  