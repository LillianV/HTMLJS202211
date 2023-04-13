//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	ball = new Player();
	ball.vx = -10;
	ball.vy = -10;
	ball.color = "purple";
	ball.width = 40;
	ball.height = 40;
		
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.move();

	//collision
	if(ball.x < ball.width/2){
		ball.x = ball.width/2
		ball.vx = -ball.vx;
		ball.color = "red";
	}
	
	if(ball.x > canvas.width - ball.width/2){
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;
		ball.color = "blue";
	}
	if(ball.y < ball.height/2){
		ball.y = ball.height/2
		ball.vy = -ball.vy;
		ball.color = "green";
	}
	
	if(ball.y > canvas.height - ball.height/2){
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;
		ball.color = "purple";
	}
	
	//Update the Screen
	ball.draw();
}






// code notes for pong, if(ball.y < p1.y + p1.height/6)
// ball only hits one side of the paddles, make the paddles tall and skinny, ball must be small
