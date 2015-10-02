function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}


function draw() {
	// clear the background

	background(100, 190, 250);

	// draw ground
	var colorGround = color(40, 180, 50);
	fill(colorGround);
	rect(0, 200, 640, 160);

	for (var i = 1; i < 30; i++) {
		var xRandom = random(10);
		var yRandom = random(10);
		drawDandelionBack(xRandom, yRandom);

	}

	// draw the weeds...I mean dandelions
	function drawDandelionBack(x, y) {
		// draw stems
		fill(0, 120, 10);
		rect(x * 60 - 1, y * 20 + 100, 4, 100, 20);
		fill(169, 225, 173);
		ellipse(x * 60, y * 20 + 100, 10, 10);

		// draw puffy white balls
		for (var i = 1; i < 8; i++) {
			noStroke();
			fill(255, 255, 255, 80);
			ellipse(x * 60, y * 20 + 100, i * -10 + 50, i * -10 + 50);

		}
	}
}
