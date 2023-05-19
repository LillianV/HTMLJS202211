
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);
//player = new GameObject({x:150});
var frictionX = .85;	
var frictionY = 1;
var gravity = 1;
var player;
var ball;
var enemy;

player = new GameObject();
	player.force = 0.5;
	player.height= 50;
	player.width = 50;
	player.x = canvas.width/2;
	player.y = 775;
	player.color = "#ffff00";


	ball = new GameObject();
	ball.force = 2;
	ball.width = 20;
	ball.height = 20;
	ball.color = "magenta";
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



//score hud
	context.font = "30px Arial black";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("score: ", 80, 25); 


	ball.drawCircle();
	player.drawRect();
}



