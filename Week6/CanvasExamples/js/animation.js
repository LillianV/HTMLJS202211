var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 100;
var y = 300;
var speedX = 2;
var speedY = 2;

var peach = new Image();
peach.src = "images/princesspeach.png"
peach.onload = function(){
    main();
}
var bg = new Image();
bg.src = "images/galaxy.jpg"
bg.onload = function(){
    main();
}

function main(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
    ctx.drawImage(bg, 0,0, canvas.width, canvas.height);
    /*
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x,300, 20, 0, 2*Math.PI, true);
    ctx.fill();
    */
    //draw sprite image
    ctx.drawImage(peach, x,y, 148, 125);
    x+= speedX;
    y+= speedY;
    if(x > canvas.width - 100 || x <-50){
        speedX *= -1;
    }

    if(y>canvas.height - 100 || y < -20){
        speedY*=-1;
    }
    console.log(speedX);
    timer = requestAnimationFrame(main);
}

