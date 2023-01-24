function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(0,0,125);
  square(50,50,300);
  strokeWeight(4);
  stroke(255);
  fill(0,125,0);
  ellipse(200,200,150,150);
  noStroke();
  fill(225,0,0)
  triangle(125,175,275,175,200,225)
  triangle(200,120,250,260,170,205)
  triangle(200,120,155,265,235,200)
  stroke(225);
  fill(225);
  beginShape(LINES);
  vertex(125,175);
  vertex(180,175);
  vertex(180,175);
  vertex(200,120);
  vertex(200,120);
  vertex(225,175);
  vertex(225,175);
  vertex(275,175);
  vertex(275,175);
  vertex(232,205);
  vertex(232,205);
  vertex(253,260);
  vertex(253,260);
  vertex(205,227);
  vertex(205,227);
  vertex(155,267);
  vertex(155,267);
  vertex(175,208);
  vertex(175,208);
  vertex(125,175)
  endShape();
}
