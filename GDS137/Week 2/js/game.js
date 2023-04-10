//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 0;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(w)
	{
		console.log("Moving up");
		player.y += -7;
	}
	if(s)
	{
		console.log("Moving down");
		player.y += 7;
	}

	if(player.y < player.height/2){
		player.y = player.height/2
		player.vy = -player.vy;
	}
	
	if(player.y > canvas.height - player.height/2){
		player.y = canvas.height - player.height/2
		player.vy = -player.vy;
	}
	
	//Update the Screen
	player.drawRect();
}

