function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    strokeWeight(2.5); 
    noFill();
    stroke(80, 180, 255); 
    describe(
      'Users can click and drag to adjust their perspective. A light blue grid of cubes forms a glowing sphere on a navy background.'
    );
  }
  
  function draw() {
    background(10, 20, 40); 
    orbitControl();
  
    
    for (let zAngle = 0; zAngle < 180; zAngle += 20) {
      for (let xAngle = 0; xAngle < 360; xAngle += 20) {
        push();
        rotateZ(zAngle);
        rotateX(xAngle);
        translate(0, 300, 0); 
        sphere(10); 
        pop();
      }
    }
  }     
  