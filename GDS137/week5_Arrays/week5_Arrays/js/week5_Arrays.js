
//-----------------------------------------------------!!!!IMPORTANT!!!-------------------------------------------------------------------------
//----------------------------------------------Instructor Cover that function first------------------------------------------------------------
//-----------------------------------The rand function is located in js/Utility/Random.js-------------------------------------------------------

//canvas and context
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
	
//timebase
var interval = 1000/60;
var timer = setInterval(animate, interval);
var gravity = 1;

var colors = [];
colors[0] = "#ff0000";
colors[1] = "#00ff00";
colors[2] = "#0000ff";

var amt = 5;	
var dots = [];

for(var i = 0; i < amt; i++)
{
	dots[i] = new GameObject();
	dots[i].x = Math.random() * canvas.width;
	dots[i].y = Math.random() * canvas.height;
	dots[i].width = rand(5,20);
	dots[i].height = dots[i].width;
	dots[i].vy = rand(-40,40);
	dots[i].vx = rand(-10,10);
	dots[i].color = `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`;
}
var states = [];
var currentState = 'square';
states['square'] = function(){dots[0].drawRect();}
states['circle'] = function(){dots[0].drawCircle();}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	states[0]();

	/*for(var i = 0; i < dots.length; i++)
	{
		dots[i].drawCircle();
		//dots[i].vy += gravity;
		dots[i].move();
		if(dots[i].x>canvas.width){
			dots[i].y = canvas.width;

		}
		
	}*/
}










