//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var follower;
var following = false;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	follower = new GameObject();
	follower.y = canvas.height/2;
	follower.x = 500;
	follower.color = "blue";
	follower.force = 3;

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
	
		platform1 = new GameObject();
		platform1.width = 500;
		platform1.x = 1000;
		platform1.y = canvas.height/2;
		platform1.color = "#66ff33";
		
		platform2 = new GameObject();
		platform2.width = 500;
		platform2.x = 500;
		platform2.y = canvas.height/2+200;
		platform2.color = "#66ff33";
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	follower.vy += gravity;
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


		// Following Mechanics

	
	

	if(player.hitTestObject(follower)){
		following = true;
	}

	if(following == true){
		follow();
	}

	

	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();

	//Show hit points
	player.drawRect();
	follower.drawCircle();
	goal.drawCircle();
}


function follow() //actually magnet function
{
	var dx = player.x - follower.x + 110;
	var dy = player.y - follower.y;
	
	//Not using this in this function but...
	//This is the Pythagorean Theorem and gets the hypoteneuse of a triangle.
	//This can be used to get the actual distance between two points.
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	follower.x += dx /25;
	follower.y += dy /25;
}

