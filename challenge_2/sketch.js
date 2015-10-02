// ball: a data object to hold info about the ball



var ball = {
	x: 500,
	y: 100,
	speedX: 5,
	speedY: 5,
	radius: 60,
};


//paddle: a data object to hold info about the ball
var paddle = {
	x: 0,
	y: 350,
	width: 300,
	height: 30,
};



//// setup: called by p5 once at startup
function setup() {
	createCanvas(640, 480);
	noStroke();
}


function draw() {



	// paddle follows mouse
	paddle.x = mouseX;


	// draw ball
	background(50, 50, 50);

	fill(255, 255, 255);

	ellipse(ball.x, ball.y, ball.radius, ball.radius);
	rect(paddle.x - paddle.width, paddle.y, paddle.width, paddle.height);



	// change position
	ball.x = ball.x + ball.speedX;
	ball.y = ball.y + ball.speedY;


	// don't let the ball go through the walls

	// right
	if (ball.x > 640) {
		ball.speedX = -ball.speedX;
	}

	// bottom
	if (ball.y > 480) {
		ball.speedY = -ball.speedY;
	}

	// left
	if (ball.x < 0) {
		ball.speedX = -ball.speedX;
	}

	// top
	if (ball.y < 0) {
		ball.speedY = -ball.speedY;
	}

	// making the ball bounce off the paddle

	if ((ball.x > paddle.x - paddle.width) && (ball.y > paddle.y)) {
		ball.speedY = -ball.speedY;
	}

	if ((ball.x > paddle.x + paddle.width) && (ball.y > paddle.y)) {
		ball.speedY = -ball.speedY;
	}


}
