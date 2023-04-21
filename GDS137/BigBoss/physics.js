// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var ball;

//---------------Set Friction and Gravity-----------------
var frictionX = .85;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player = new GameObject();
	player.force = 2;
	player.width = 200;
	player.height = 20;
	player.y = 800;
	player.color = "purple";

	ball = new GameObject();
	ball.force = 2;
	ball.color = "green";
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	
	player.vy *= frictionY;
	player.vx *= frictionX;
	
	player.vy += gravity;
	
	player.x += player.vx;
	player.y += player.vy;
	
	//--------------------Check Collision------------------------------------------------------
	//bottom
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2;
	}
	//right side
	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2;
	}
	//left side

	ball.vy *= frictionY;
	ball.vx *= frictionX;
	
	ball.vy += gravity;
	
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//--------------------Check Collision------------------------------------------------------
	if(ball.y > canvas.height - ball.height/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		ball.y = canvas.height - ball.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		ball.vy = -ball.vy * .99;
	}
	if(ball.x > canvas.width - ball.width/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		ball.x = canvas.width - ball.width/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		ball.vy = -ball.vy * .99;
	}

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
	player.drawRect();
	ball.drawCircle();
}