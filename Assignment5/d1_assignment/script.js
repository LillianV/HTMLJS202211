//defines variable to access properties of canvas  by ID
var canvas = document.getElementById("canvas")
//Define the Drawing Context
var ctx = canvas.getContext('2d')

//Draw a circle
ctx.fillStyle = "ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.beginPath();
ctx.arc(400,300,50,0,(3*Math.PI)/2,false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Draws a Rectangle fillRect(x,y,width,height)
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5"
ctx.fillRect(30,30,200,100);
ctx.strokeRect(300,30,200,100);

//Draw Lines
ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth = "5"
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,250);
ctx.lineTo(400,0);
ctx.stroke();

//Some random shape
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle ="00ffff";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(625,200);
ctx.lineTo(600,140);
ctx.closePath();
ctx.fill();
ctx.stroke();