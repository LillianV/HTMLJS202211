//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var bowser = new Image();
var peach = new Image();
var toad = new Image();
var mario = new Image();
var hbowser = new Image();
var hpeach = new Image();
var htoad = new Image();
var hmario = new Image();

var bg = new Image();
var bg2 = new Image();

var startHealth = 5;
var health = startHealth;
var healthBarWidth = 100;
var gameOver = true;

bowser.src = "images/bowser.png";
peach.src = "images/peach.png";
toad.src = "images/toad.webp";
mario.src = "images/mario.webp";

hbowser.src = "images/bowser2.gif";
hpeach.src = "images/peach2.gif";
htoad.src = "images/toad2.gif";
hmario.src = "images/mario2.gif";

bg.src = "images/background1.webp";
bg2.src = "images/background2.jpg"


bg.onload = function(){
    draw();
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "Select a character above";

function onKeyDown(e){
   console.log(e.keyCode); 
}
function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("you pressed the spacebar")
        gameOver = false;
        draw(bowser,peach,toad,mario,bowser,peach,toad,mario);
    }
}
function keyPressDown(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(health<=0){
        //restart game
        restartGame();
    }
}
function restartGame(){
    location.reload();
}

function draw(bowser,peach,toad,mario,cbowser,cpeach,ctoad,cmario){
    if(gameOver == true){
        //drawing the font
    ctx.drawImage(bg,0,0, canvas.width,canvas.height);
    ctx.font = "40px New Times Roman";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "green";
    ctx.textAlign = "center"
    ctx.fillText("Welcome to Super Mario Speedrun!", canvas.width/2, 300);
    ctx.fillText("press space to start", canvas.width/2, 350);
    ctx.strokeText("Welcome to Super Mario Speedrun!", canvas.width/2, 300);
    
    }
    else{

        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px New Times Roman";
        ctx.textAlign = "center";
        ctx.fillStyle = "aliceblue";
        
        ctx.drawImage(bg2,0,0,canvas.width,canvas.width);
        ctx.fillText("Player Choice", canvas.width/2, 100);
        ctx.drawImage(bowser, canvas.width/2-100-bowser.width/2, 150);
        ctx.drawImage(peach, canvas.width/2 -peach.width/2, 150);
        ctx.drawImage(toad, canvas.width/2+100-toad.width/2, 150);
        ctx.drawImage(mario, canvas.width/2+200-mario.width/2, 150);
        //cpu choices
        ctx.fillText("Cpu Choice", canvas.width/2, 325);
        ctx.drawImage(cbowser, canvas.width/2-100-cbowser.width/2, 375);
        ctx.drawImage(cpeach, canvas.width/2-cpeach.width/2, 372);
        ctx.drawImage(ctoad, canvas.width/2+100-ctoad.width/2, 375);
        ctx.drawImage(cmario, canvas.width/2+200-cmario.width/2, 375);

        ctx.fillText(results, canvas.width/2, 475);
        ctx.restore();
    }

}

function drawHealthBar(){
    var currentBarWidth = healthBarWidth * (health/startHealth);
    ctx.fillStyle = "black";
    ctx.fillRect(50, 30, healthBarWidth, 10);
    ctx.font = "25px New Times Roman";
    ctx.fillText("Health", 50,25);
    if(health>0){
        ctx.fillStyle = "red";
        ctx.fillRect(50,30,currentBarWidth,10);
    }
}

//alert("select rock, paper or scissors");
var rps = ["bowser", "peach", "toad","mario"];
//console.log(rps[0]);

document.getElementById("bowser").addEventListener('click', function (e) {
   // ctx.fillText("You picked " + rps[0], canvas.width/2,280);
    ctx.clearRect(0,0,1000,1000);
    playGame(rps[0]);
});
document.getElementById("peach").addEventListener('click', function (e) {
   // ctx.fillText("You picked Peach", canvas.width/2,280);
    ctx.clearRect(0,0,1000,1000);
    playGame(rps[1]);
});
document.getElementById("toad").addEventListener('click', function (e) {
   // ctx.fillText("You picked Toad",canvas.width/2,280);
    ctx.clearRect(0,0,1000,1000);
    playGame(rps[2]);
});
document.getElementById("mario").addEventListener('click', function (e) {
   // ctx.fillText("You picked Mario",canvas.width/2,280);
    ctx.clearRect(0,0,1000,1000);
    playGame(rps[3]);
});

function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }else{
        var cpuChoice = Math.floor(Math.random() * 3.99);
    console.log(cpuChoice, playerChoice);
       // drawHealthBar();
    switch (playerChoice) {
        case "bowser":
            if (cpuChoice == 0) {
                //rock
                //ctx.fillText("Cpu chose rock. It's a tie", canvas.width/2, 280);
                results = "Cpu chose Bowser. It's a tie";
                draw(hbowser,peach,toad,mario,hbowser,peach,toad,mario);
            }
            else if (cpuChoice == 1) {
                //paper
                //ctx.fillText("Cpu chose paper. You lose", canvas.width/2, 280);
                results = "Cpu chose Peach. You lose";
                draw(hbowser,peach,toad,mario,bowser,hpeach,toad,mario);
            }
            else if(cpuChoice == 2) {
                //scissors
               // ctx.fillText("Cpu chose scissors. You win", canvas.width/2, 280);
                results = "Cpu chose Toad. You win";
                draw(hbowser,peach,toad,mario,bowser,peach,htoad,mario);
            }
            else {
                //scissors
               // ctx.fillText("Cpu chose scissors. You win", canvas.width/2, 280);
                results = "Cpu chose Mario. You lose";
                draw(hbowser,peach,toad,mario,bowser,peach,toad,hmario);
            }
            break;


        case "peach":
            if (cpuChoice == 0) {
                //rock
                //ctx.fillText("Cpu chose rock. You win", canvas.width/2, 280);
                results = "Cpu chose Bowser. You win";
                draw(bowser,hpeach,toad,hbowser,peach,toad,mario);
            }
            else if (cpuChoice == 1) {
                //paper
                //ctx.fillText("Cpu chose paper. It's a tie", canvas.width/2, 280);
                results = "Cpu chose Peach. It's a tie";
                draw(bowser,hpeach,toad,bowser,hpeach,toad,mario);
            }
            else if (cpuChoice == 2){
                //scissors
               // ctx.fillText("Cpu chose scissors. You lose", canvas.width/2, 280);
                results = "Cpu chose Toad. You lose";
                draw(bowser,hpeach,toad,bowser,peach,htoad,mario);
            }
            else{
                //scissors
               // ctx.fillText("Cpu chose scissors. You win", canvas.width/2, 280);
                results = "Cpu chose Mario. You win";
                draw(bowser,hpeach,toad,mario,bowser,peach,toad,hmario);
            }
            break;

        case "toad":
            if (cpuChoice == 0) {
                //rock
                //ctx.fillText("Cpu chose rock. You lose", canvas.width/2, 280);
                results = "Cpu chose Bowser. You lose";
                draw(bowser,peach,htoad,hbowser,peach,toad,mario);
            }
            else if (cpuChoice == 1) {
                //paper
                //ctx.fillText("Cpu chose paper. You win", canvas.width/2, 280);
                results = "Cpu chose Peach. You win";
                draw(bowser,peach,htoad,bowser,hpeach,toad,mario);
            }
            else if(cpuChoice == 2){
                //scissors
               // ctx.fillText("Cpu chose scissors. It's a tie", canvas.width/2, 280);
                results = "Cpu chose Toad. It's a tie";
                draw(bowser,peach,htoad,bowser,peach,htoad,mario);
            }
            else {
                //water
               // ctx.fillText("Cpu chose scissors. You lose", canvas.width/2, 280);
                results = "Cpu chose Mario. You lose";
                draw(bowser,peach,htoad,bowser,peach,toad,hmario);
            }
            break;

         case "mario":
            if (cpuChoice == 0) {
                        //rock
                        //ctx.fillText("Cpu chose rock. It's a tie", canvas.width/2, 280);
                        results = "Cpu chose Bowser. You win";
                        draw(bowser,peach,toad,hmario,hbowser,peach,toad,mario);
                    }
                    else if (cpuChoice == 1) {
                        //paper
                        //ctx.fillText("Cpu chose paper. You lose", canvas.width/2, 280);
                        results = "Cpu chose Peach. You lose";
                        draw(bowser,peach,toad,hmario,bowser,hpeach,toad,mario);
                    }
                    else if(cpuChoice == 2){
                        //scissors
                       // ctx.fillText("Cpu chose scissors. You win", canvas.width/2, 280);
                        results = "Cpu chose Toad. You win";
                        draw(bowser,peach,toad,hmario,bowser,peach,htoad,mario);
                    }
                    else{
                        //scissors
                       // ctx.fillText("Cpu chose scissors. You win", canvas.width/2, 280);
                        results = "Cpu chose Mario. It's a tie";
                        draw(hbowser,peach,toad,mario,bowser,peach,toad,hmario);
                    }
                    break;
    }
    }
}