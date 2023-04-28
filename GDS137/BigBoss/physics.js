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
var frictionX = .9;	
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
	ball.vx = 5;
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	//drawing string
	context.save();
    context.strokeStyle = "black";
    context.beginPath();

    context.moveTo(player.x, player.y);
    context.lineTo(ball.x, ball.y);

    context.closePath();
    context.lineWidth = 1;
    context.stroke();
    context.restore();
	
	//player movement
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
	if(player.x < player.width/2)
        {
            player.x = player.width/2;
            player.vx = 0;
        }

	//ball stuff
	ball.vy *= frictionY;
	
	ball.vy += gravity;
	
	ball.x += ball.vx;
	ball.y += ball.vy;

	if(ball.x > canvas.width - ball.width/2){
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;
	}
	if (ball.x < 0 + ball.width/2) {
		ball.x = 0 + ball.width/2;
		ball.vx = -ball.vx;
	}
	if(ball.y < ball.height/2){
		ball.y = ball.height/2
		ball.vy = -ball.vy;
	}
	
	if(ball.y > canvas.height - ball.height/2){
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;
		p1Score = 0;
	}

	if (ball.hitTestObject(player)) {
		ball.y = player.y - player.height / 2 - ball.height / 2;
		ball.vy = -35;
		console.log("colliding");
		p1Score+1;
  		pWins();

		//inner right
        if (ball.x > player.x + player.width / 6) {
            ball.vy = -35;
            ball.vx = ball.force;
        }
		//outer right
		if (ball.x > player.x + player.width / 3) {
			ball.vy = -35;
			ball.vx = ball.force*5;
		}
		// inner left
        if (ball.x < player.x - player.width / 6) {
            ball.vx = 35;
            ball.vx = -ball.force;
        }
		//outer left
		if (ball.x < player.x - player.width / 3) {
			ball.vy = -35;
			ball.vx = -ball.force*5;
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
	  }

}