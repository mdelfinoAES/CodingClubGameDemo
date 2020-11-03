let player = {
  x: 100,
  y: 100,
  size: 50,
  speed: 5,
  score: 0
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(50, 50, 200);
  fill(255);

  textSize(24);
  text(player.score, 25, 25);
  circle(player.x, player.y, player.size);

  if (keyIsDown(UP_ARROW)) {
    player.y -= player.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.y += player.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }
}
