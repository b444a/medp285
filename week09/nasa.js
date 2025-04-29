// Variable to store NASA model
let astronaut;

function preload() {
  astronaut = loadModel('/assets/astronaut.obj');
}

function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);

  
  ambientLight(150);
  pointLight(255, 255, 255, mouseX - width / 2, mouseY - height / 2, 200);

  describe(
    'Eight modified 3D shapes including custom ellipsoids and torus knots, plus a 3D astronaut model. Each shape spins at a unique speed and uses lighting and material effects. Interaction is affected by the mouse.'
  );
}

function draw() {
  background(0);

  
  push();
  translate(-250, -100, 0);
  rotateZ(frameCount * 0.5);
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  ambientMaterial(200, 100, 255);
  plane(100, 40);
  pop();

  
  push();
  translate(-75, -100, 0);
  rotateZ(frameCount);
  rotateX(frameCount * 0.3);
  rotateY(frameCount * 0.7);
  specularMaterial(255, 150, 100);
  box(40, 100, 40);
  pop();

  
  push();
  translate(100, -100, 0);
  rotateWithSpeed(2);
  emissiveMaterial(255, 120, 50);
  cylinder(40, 90);
  pop();


  push();
  translate(275, -100, 0);
  rotateWithSpeed(1.5);
  ambientMaterial(80, 200, 255);
  cone(50, 80);
  pop();

  
  push();
  translate(-250, 100, 0);
  rotateWithSpeed(1.2);
  normalMaterial();
  torus(40, 10);
  pop();

  
  push();
  translate(-75, 100, 0);
  rotateWithSpeed(0.7);
  ambientMaterial(255, 80, 220);
  ellipsoid(30, 80, 30);
  pop();

  
  push();
  translate(100, 100, 0);
  rotateWithSpeed(1.3);
  normalMaterial();
  torus(25, 8, 100, 20);
  pop();

  
  push();
  translate(275, 100, 0);
  rotateZ(180);
  rotateWithSpeed(0.5);
  ambientMaterial(255);
  model(astronaut);
  pop();
}

function rotateWithSpeed(speed) {
  rotateZ(frameCount * speed);
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
}
