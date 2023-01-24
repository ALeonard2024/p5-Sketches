function setup() {
createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0);
  rect(50,100,300,150);
  fill(225,225,0);
  arc(125,175,125,125,radians(225), radians(135), PIE);
  fill(225,0,0);
  square(210,110,125,70,70,0,0)
  fill(255);
  noStroke();
  ellipse(245,170,35,35);
  ellipse(300,170,35,35);
  fill(0,0,225);
  ellipse(245,170,20,20);
  ellipse(300,170,20,20);
}
