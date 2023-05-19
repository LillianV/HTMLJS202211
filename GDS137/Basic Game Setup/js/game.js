var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000 / 60;
var timer = setInterval(animate, interval);
//player = new GameObject({x:150});
var frictionX = .85;
var frictionY = .9;
var gravity = Math.random() * (0.5 - 0.15) + 0.15;
var player;
var amt = 5;
var ball = [];
var square = [];




var p1Score = 0;

player = new GameObject();
player.height = 50;
player.width = 50;
player.x = canvas.width / 2;
player.y = 775;
player.color = "#ffff00";



// ball
for (var i = 0; i < amt; i++) {
	ball[i] = new GameObject();
	ball[i].x = Math.random() * (800 - 0) + 0;
	ball[i].y = Math.random() * (-500 - 0) + 0;
	ball[i].width = 20;
	ball[i].height = 20;
	ball[i].vy = 2;
	ball[i].color = `red`;
}



// square

for (var i = 0; i < amt; i++) {
	square[i] = new GameObject();
	square[i].y = Math.random() * (-500 - 0) + 0;
	square[i].x = Math.random() * (800 - 0) + 0;
	square[i].width = 20;
	square[i].height = 20;
	square[i].vy = 2;
	square[i].color = `green`;
}
//-------------------------AnimationLoop--------------------------------

function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	//movement
	if (d) {
		player.vx += player.ax * player.force;
	}
	if (a) {
		player.vx += player.ax * -player.force;
	}
	player.vx *= frictionX;
	player.x += player.vx;


	//BALL

	for (var i = 0; i < amt; i++) {
		//ball falling
		ball[i].vy *= frictionY;
		ball[i].vy += gravity;
		ball[i].x += ball[i].vx;
		ball[i].y += ball[i].vy;

		// if ball touch = score 0
		if (ball[i].hitTestObject(player)) {
			player.x--;
			player.vx = 0;
			ball[i].y = 10000;
			console.log("colliding");
			p1Score = 0;
		}

		if (ball[i].y > 800) {
			ball[i].x = Math.random() * (800 - 0) + 0;
			ball[i].y = Math.random() * (-500 - 0) + 0;
		}

		ball[i].drawCircle();
	}


	//square
	for (var i = 0; i < amt; i++) {
		//square falling
		square[i].vy *= frictionY;
		square[i].vy += gravity;
		square[i].x += square[i].vx;
		square[i].y += square[i].vy;

		// if square touch = score ++
		if (square[i].hitTestObject(player)) {
			player.x--;
			player.vx = 0;
			square[i].y = 10000;
			console.log("colliding");
			p1Score++;
		}
		if (square[i].y > 800) {
			square[i].x = Math.random() * (800 - 0) + 0;
			square[i].y = Math.random() * (-500 - 0) + 0;
		}
		square[i].drawRect();
	}

	//right canvas collision
	if (player.x > canvas.width - player.width / 2) {
		player.x = canvas.width - player.width / 2;
		player.vx = 0;

	}
	//left canvas collision
	if (player.x < player.width / 2) {
		player.x = player.width / 2;
		player.vx = 0;
	}
	//score hud
	context.font = "30px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Score: " + p1Score, 80, 25);

	player.drawRect();
}



