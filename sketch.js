function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();  // Disable stroke for the shapes
}


function draw() {
  background(30, 30, 60, 25); // Dark background with transparency

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 80);
    let colorR = random(255);
    let colorG = random(255);
    let colorB = random(255);
    let shapeType = random(['ellipse', 'rect', 'triangle']);

    fill(colorR, colorG, colorB, 150); // Set fill color with some transparency

    if (shapeType === 'ellipse') {
      ellipse(x, y, size, size);
    } else if (shapeType === 'rect') {
      rect(x, y, size, size);
    } else if (shapeType === 'triangle') {
      triangle(x, y, x + size, y, x + size / 2, y - size);
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}