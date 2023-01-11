//single line javascript comment
/*
Multi-line javascript comment
*/

//defines variable to access properties of canvas  by ID
var canvas = document.getElementById("canvas")
//Define the Drawing Context
var ctx = canvas.getContext('2d')

//Draw stuff
//Sets up Color and outline styles
ctx.fillStyle = "rgb(0,0,255)";
ctx.strokeStyle = "green";
ctx.lineWidth = "5";
//Draws a Rectangle fillRect(x,y,width,height)
ctx.fillRect(30,30,200,100);
ctx.strokeRect(300,30,200,100);

//Draw Lines
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,250);
ctx.lineTo(800,0);
ctx.stroke();

ctx.strokeStyle = "red"
ctx.beginPath();
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

//Draw a circle
ctx.beginPath();
ctx.arc(400,300,50,0,(3*Math.PI)/2,false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Some random shape
ctx.fillStyle = "#55ddef";
ctx.strokeStyle ="yellow";
ctx.lineWidth = "2";

ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(625,200);
ctx.lineTo(600,140);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Draw image to the canvas
var peach = new Image();
peach.src="images/princesspeach.png";

peach.onload = function(){
    ctx.drawImage(peach, 400,210,100,100)
}