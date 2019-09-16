var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 20; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(10, 150)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(200, 230, 200, 200);
    } else {
      fill(200, 255, 200, 200);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-2, 2);
    bubble.y += random(-2, 2);
  }
}
