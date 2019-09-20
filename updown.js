function setup() {
  createCanvas(400, 400);
}

var ballX = 30;
var ballSpeed = 3;

var ballX2 = 370;
var ballSpeed2 = 5;

function draw() {
  background(220);

  fill(255, 0, 0);
  ellipse(150, ballX, 30);
  
  fill(0, 0, 255);
  ellipse(250, ballX2, 30);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  if (ballX >= 400) {
    ballSpeed = -3;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballX <= 0) {
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }

}
