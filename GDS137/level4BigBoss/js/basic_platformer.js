//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var follower;
var following = false;
var health = 100;
var pScore = 0;
var mouse = { x: 0, y: 0 };



canvas = document.getElementById("canvas");
canvas.addEventListener("mousemove", track);
canvas.addEventListener("click", shoot);
context = canvas.getContext("2d");



player = new GameObject({ x: 100, y: canvas.height / 2 + 100 });

var followPoint = player.left();

follower = new GameObject();
follower.y = canvas.height / 2;
follower.x = 500;
follower.color = "blue";
follower.force = 3;

healthbar1 = new GameObject();
healthbar1.width = 200;
healthbar1.height = 25;
healthbar1.x = 150;
healthbar1.y = 50;
healthbar1.color = "red";

healthbar2 = new GameObject();
healthbar2.width = 200;
healthbar2.height = 25;
healthbar2.x = 150;
healthbar2.y = 50;
healthbar2.color = "green";

basket = new GameObject();
basket.width = 75;
basket.height = 100;
basket.x = 950;
basket.y = 300;
basket.color = "purple";

platform0 = new GameObject();
platform0.width = 200;
platform0.x = platform0.width / 2;
platform0.y = canvas.height - platform0.height / 2;
platform0.color = "#66ff33";

platform1 = new GameObject();
platform1.width = 500;
platform1.x = 0;
platform1.y = canvas.height / 2;
platform1.color = "#66ff33";
platform1.vx = 3;

platform2 = new GameObject();
platform2.width = 500;
platform2.x = 500;
platform2.y = canvas.height / 2 + 200;
platform2.color = "#66ff33";

goal = new GameObject({ width: 24, height: 50, x: canvas.width - 50, y: 100, color: "#00ffff" });


var fX = .85;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);

function track(e) {
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}

function shoot(){
	follower.vx++;
	follower.vy++;
}

function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	if (w && player.canJump && player.vy == 0) {
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if (a) {
		player.vx += -player.ax * player.force;
		followPoint = player.right();
	}
	if (d) {
		player.vx += player.ax * player.force;
		followPoint = player.left();
	}
	if (q && following == true) {
		following = false;

		var dx = mouse.x - follower.x;
		var dy = mouse.y - follower.y;

		follower.x += dx/5;
		follower.y += dy/5;
	}

	player.vx *= fX;
	player.vy *= fY;

	player.vy += gravity;

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	follower.vy += gravity;


	while (platform0.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while (platform0.hitTestPoint(player.left()) && player.vx <= 0) {
		player.x++;
		player.vx = 0;
	}
	while (platform0.hitTestPoint(player.right()) && player.vx >= 0) {
		player.x--;
		player.vx = 0;
	}
	while (platform0.hitTestPoint(player.top()) && player.vy <= 0) {
		player.y++;
		player.vy = 0;
	}

	while (platform1.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while (platform1.hitTestPoint(player.left()) && player.vx <= 0) {
		player.x++;
		player.vx = 0;
	}
	while (platform1.hitTestPoint(player.right()) && player.vx >= 0) {
		player.x--;
		player.vx = 0;
	}
	while (platform1.hitTestPoint(player.top()) && player.vy <= 0) {
		player.y++;
		player.vy = 0;
	}



	while (platform2.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while (platform2.hitTestPoint(player.left()) && player.vx <= 0) {
		player.x++;
		player.vx = 0;
	}
	while (platform2.hitTestPoint(player.right()) && player.vx >= 0) {
		player.x--;
		player.vx = 0;
	}
	while (platform2.hitTestPoint(player.top()) && player.vy <= 0) {
		player.y++;
		player.vy = 0;
	}


	// Following Mechanics

	if (player.hitTestObject(follower)) {
		following = true;
	}

	if (following == true) {
		follow();
	}
	if (follower.hitTestObject(basket)) {
		pScore++;
		follower.x = 10000;
		follower.y = 10000;
		console.log(pScore);
	}

	//healthbar stuff

	if (player.hitTestObject(goal)) {
		health = health - 5;
		healthbar2.width = healthbar2.width - 10;
		player.vy = -player.vy;
		player.vx = -player.vx;
	}
	if (healthbar2.width < 0) {
		healthbar2.width = 0;
	}
	if (health = 0) {
		window.reload();
	}


	if (platform1.x <= canvas.width) {
		platform1.x += platform1.vx;
	}
	if (platform1.x + 250 <= 0) {
		platform1.x -= platform1.vx;
	}

	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();

	//Show hit points
	player.drawRect();
	follower.drawCircle();
	healthbar1.drawRect();
	healthbar2.drawRect();
	goal.drawCircle();
	basket.drawRect();

	context.font = "30px New Times Roman";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Score: " + pScore, 100, 25);




}


function follow() //actually magnet function
{
	var dx = followPoint.x - follower.x;
	var dy = followPoint.y - follower.y;

	follower.x += dx / 25;
	follower.y += dy / 25;
}






