
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);
//player = new GameObject({x:150});
var frictionX = .85;	
var frictionY = 1;
var gravity = 4;
var player;
var ball;
var square;
var p1Score = 0;

player = new GameObject();
	player.force = 1;
	player.height= 50;
	player.width = 50;
	player.x = canvas.width/2;
	player.y = 775;
	player.color = "#ffff00";

	var amt = 5;	
	var ball = [];
	var square = [];
	
	for(var i = 0; i < amt; i++)
	{
		ball[i] = new GameObject();
		ball[i].x = Math.random() * (100 - 0) + 0;
		ball[i].y = Math.random() * (800 - 0) + 0;
		ball[i].width = 20;
		ball[i].height = dots[i].width;
		ball[i].vy = 2;
		ball[i].color = "red";
	}

	for(var i = 0; i < amt; i++)
	{
		square[i] = new GameObject();
		square[i].x = Math.random() * (100 - 0) + 0;
		square[i].y = Math.random() * (800 - 0) + 0;
		square[i].width = 20;
		square[i].height = dots[i].width;
		square[i].vy = 2;
		square[i].color = "green";
	}

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

//movement
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	player.vx *= frictionX;
	player.x += player.vx;

	//Ball and square gravity
	
	ball[i].vy += gravity;
	
	ball[i].y = ball[i].vy;
	
	square[i].vy += gravity;
	
	square[i].y = square[i].vy;

//right canvas collision
if(player.x > canvas.width - player.width/2)
{
	player.x = canvas.width - player.width/2;
	player.vx = 0;
	
}

//left canvas collision
if(player.x < player.width/2)
	{
		player.x = player.width/2;
		player.vx = 0;
	}

	if (ball[i].hitTestObject(player)) {
		player.x--;
		player.vx = 0;
		ball[i].y = Math.random() * (100 - 0) + 0;
		ball[i].x = Math.random() * (800 - 0) + 0;
		console.log("colliding");
		p1Score = 0;
	}
	if (square[i].hitTestObject(player)) {
		player.x--;
		player.vx = 0;
		square[i].y = Math.random() * (100 - 0) + 0;
		square[i].x = Math.random() * (800 - 0) + 0;
		console.log("colliding");
		p1Score++;
	}

	if(square[i].y == 800){
		square[i].y = Math.random() * (100 - 0) + 0;
		square[i].x = Math.random() * (800 - 0) + 0;
	}



//score hud
	context.font = "30px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Score: " + p1Score, 80, 25); 


	ball[i].drawCircle();
	square[i].drawRect();
	player.drawRect();
}



