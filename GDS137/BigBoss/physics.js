// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var ball;
var pWins = 0;
var p1Score = 0;

//---------------Set Friction and Gravity-----------------
var frictionX = .85;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player = new GameObject();
	player.force = 2;
	player.width = 250;
	player.height = 40;
	player.y = 550;
	player.color = "#00ffff";

	ball = new GameObject();
	ball.force = 2;
	ball.color = "#ff00ff";
	
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
	if(player.x > canvas.width - player.width/2)
	{
		player.x = -canvas.width - player.width/2;
	}

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
		ball.vy = -ball.vy * .67;
		p1Score = 0;
  		updateScore();
	}
	if(ball.x > canvas.width - ball.width/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		ball.x = canvas.width - ball.width/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		ball.vy = -ball.vy * .67;
	}

	if (ball.hitTestObject(player)) {
		ball.y = player.y - player.height / 2 - ball.height / 2;
		ball.vy = -35;
		console.log("colliding");
		p1Score++;
  		updateScore();

		//top
		if (ball.y < player.y - player.height / 6) {
				ball.vy = -35;
		}
		//bottom
		if (ball.y > player.y + player.height / 6) {
				ball.vy = 35;
		}
	}
	player.drawRect();
	ball.drawCircle();

	context.font = "16px Arial black";
	context.fillStyle = "#555555";
	context.textAlign = "left";
	context.fillText("Score: " + p1Score, 80, 25); 

	function pWins() {
		p1Score++;
		updateScore();
	  }
	  function updateScore() {
		var p1ScoreElement = document.getElementById("p1Score");
		p1ScoreElement.textContent = p1Score; 
	  }

}