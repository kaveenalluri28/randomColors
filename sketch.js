var ball;
function setup() {
  createCanvas(500, 600);

  ball = createSprite(200,200,20,30)
}

function draw() {
  background("lightBlue");

  if(keyDown("left")){

    ball.x = ball.x - 5;
    background("green");

  }

  if(keyDown("right")){

    ball.x = ball.x + 5;
    background("blue");

  }

  if(keyDown("up")){

    ball.y = ball.y - 5;
    background("yellow");

  }

  if(keyDown("down")){

    ball.y = ball.y + 5;
    background("red");

  }


  drawSprites();
}