//defines variable to access properties of canvas  by ID
var canvas = document.getElementById("canvas")
//Define the Drawing Context
var ctx = canvas.getContext('2d')

//corcle
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.beginPath();
ctx.arc(385,442,67,0,2*Math.PI,true);
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
ctx.moveTo(85,682);
ctx.lineTo(279,549);
ctx.stroke();

//hexagon?
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle ="00ffff";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(558,309);
ctx.lineTo(667,284);
ctx.lineTo(725,380);
ctx.lineTo(651,465);
ctx.lineTo(548,420);
ctx.closePath();
ctx.fill();
ctx.stroke();

//I'm a star
ctx.fillStyle = "#ffff00";
ctx.strokeStyle ="rgb(32,32,32)";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.moveTo(635,496);
ctx.lineTo(668,554);
ctx.lineTo(733,568);
ctx.lineTo(688,616);
ctx.lineTo(696,682);
ctx.lineTo(635,653);
ctx.lineTo(576,681);
ctx.lineTo(584,616);
ctx.lineTo(539,567);
ctx.lineTo(604,555);
ctx.closePath();
ctx.fill();
ctx.stroke();