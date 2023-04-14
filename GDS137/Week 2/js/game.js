//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000 / 60;
var player;

//Set Up the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Instantiate the Player
player = new GameObject();
player.x = 0;

var ball = new GameObject();
ball.vx = -10;
ball.vy = 0;
ball.color = "purple";
ball.width = 40;
ball.height = 40;

var player2 = new GameObject();
player2.x = 1024;
player2.color = "blue";

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate() {
	//Erase the Screen
	context.clearRect(0, 0, canvas.width, canvas.height);


	//Move the Player to the right
	if (w) {
		console.log("Moving up");
		player.y += -9;
	}
	if (s) {
		console.log("Moving down");
		player.y += 9;
	}

	if (player.y < player.height / 2) {
		player.y = player.height / 2
		player.vy = -player.vy;
	}

	if (player.y > canvas.height - player.height / 2) {
		player.y = canvas.height - player.height / 2
		player.vy = -player.vy;
	}

	ball.move();

	//collision
	if (ball.x < 0 - ball.width) {
		ball.x = canvas.width / 2;
	}
	if (ball.x > 1024 + ball.width) {
		ball.x = canvas.width / 2;
	}

	if (ball.y < ball.height / 2) {
		ball.y = ball.height / 2
		ball.vy = -ball.vy;
		ball.color = "green";
	}

	if (ball.y > canvas.height - ball.height / 2) {
		ball.y = canvas.height - ball.height / 2
		ball.vy = -ball.vy;
		ball.color = "purple";
	}
	//Player 2
	if (u) {
		console.log("Moving up");
		player2.y += -9;
	}
	if (j) {
		console.log("Moving down");
		player2.y += 9;
	}

	if (player2.y < player2.height / 2) {
		player2.y = player2.height / 2
		player2.vy = -player2.vy;
	}

	if (player2.y > canvas.height - player2.height / 2) {
		player2.y = canvas.height - player2.height / 2
		player2.vy = -player2.vy;
	}


	//Update the Screen
	ball.drawCircle();

	//Update the Screen
	player.drawRect();
	player2.drawRect();

	if (ball.hitTestObject(player)) {
		ball.x = player.x + player.width / 2 + ball.width / 2;
		ball.vx = -ball.vx;
		console.log("colliding");

		//top
		if (ball.y < player.y - player.height / 6) {
				ball.vy = -5;
		}
		//bottom
		if (ball.y > player.y + player.height / 6) {
				ball.vy = 5;
		}
	}
	//Player 2 collision w/ ball
	if (ball.hitTestObject(player2)) {
		ball.x = player2.x - player2.width / 2 - ball.width / 2;
		ball.vx = -ball.vx;
		console.log("colliding");

		//top
		if (ball.y < player2.y - player2.height / 6) {
				ball.vy = -5;
		}
		//bottom
		if (ball.y > player2.y + player2.height / 6) {
				ball.vy = 5;
		}
	}

}