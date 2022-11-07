//defines variable to access properties of canvas  by ID
var canvas = document.getElementById("canvas")
//Define the Drawing Context
var ctx = canvas.getContext('2d')

//corcle
ctx.fillStyle = "ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.beginPath();
ctx.arc(385,442,67,0,2*Math.PI,true);
ctx.lineTo(385,442);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Draws a Rectangle fillRect(x,y,width,height)
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5"
ctx.fillRect(86,302,100,100)
ctx.strokeRect(86,302,100,100);

//Limes
ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth = "5"
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,250);
ctx.lineTo(400,0);
ctx.stroke();

//hexagon?
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

//I'm a star
ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(625,200);
ctx.lineTo(600,140);
ctx.lineTo(600,140);
ctx.lineTo(600,140);
ctx.lineTo(600,140);
ctx.lineTo(600,140);
ctx.lineTo(600,140);
ctx.lineTo(600,140);
ctx.closePath();
ctx.fill();
ctx.stroke();