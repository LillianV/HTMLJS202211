//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

rock.src = "images/rock.jpg";
paper.src = "images/paper.jpg";
scissors.src = "images/scissors.jpg";

hrock.src = "images/rock2.jpg";
hpaper.src = "images/paper2.jpg";
hscissors.src = "images/scissors2.jpg";

hscissors.onload = function(){
    draw();
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "Select rock, paper or scissors above";

function onKeyDown(e){
   console.log(e.keyCode); 
}
function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("you pressed the spacebar")
        gameOver = false;
        draw(rock,paper,scissors,rock,paper,scissors);
    }
}

function draw(rock,paper,scissors, crock,cpaper,cscissors){
    if(gameOver == true){
        //drawing the font
        ctx.font = "40px New Times Roman";
    ctx.fillStyle = "green";
    ctx.strokeStyle = "aliceblue";
    ctx.textAlign = "center"
    ctx.fillText("Welcome to the RPS Game!", canvas.width/2, 100);
    ctx.fillText("press space to start", canvas.width/2, 150);
    ctx.strokeText("Welcome to the RPS Game!", canvas.width/2, 100);
    }
    else{

        ctx.save();
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "30px New Times Roman";
        ctx.textAlign = "center";
        ctx.fillStyle = "purple";
        ctx.fillText("Player Choice", canvas.width/2, 100);
        ctx.drawImage(rock, canvas.width/2-100-rock.width/2, 150);
        ctx.drawImage(paper, canvas.width/2 -paper.width/2, 150);
        ctx.drawImage(scissors, canvas.width/2+100-scissors.width/2, 150);
        //cpu choices
        ctx.fillText("Cpu Choice", canvas.width/2, 325);
        ctx.drawImage(crock, canvas.width/2-100-crock.width/2, 375);
        ctx.drawImage(cpaper, canvas.width/2-cpaper.width/2, 372);
        ctx.drawImage(cscissors, canvas.width/2+100-cscissors.width/2, 375);

        ctx.fillText(results, canvas.width/2, 475);
        ctx.restore();
    }

}

//alert("select rock, paper or scissors");
var rps = ["rock", "paper", "scissors"];
//console.log(rps[0]);

document.getElementById("rock").addEventListener('click', function (e) {
   // ctx.fillText("You picked " + rps[0], canvas.width/2,280);
    ctx.clearRect(0,0,1000,1000);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click', function (e) {
   // ctx.fillText("You picked paper", canvas.width/2,280);
    ctx.clearRect(0,0,1000,1000);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click', function (e) {
   // ctx.fillText("You picked scissors",canvas.width/2,280);
    ctx.clearRect(0,0,1000,1000);
    playGame(rps[2]);
});

function playGame(playerChoice) {
    if(gameOver == true){
        return;
    }else{
        var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                //ctx.fillText("Cpu chose rock. It's a tie", canvas.width/2, 280);
                results = "Cpu chose rock. It's a tie";
                draw(hrock,paper,scissors,hrock,paper,scissors);
            }
            else if (cpuChoice == 1) {
                //paper
                //ctx.fillText("Cpu chose paper. You lose", canvas.width/2, 280);
                results = "Cpu chose paper. You lose";
                draw(hrock,paper,scissors,rock,hpaper,scissors);
            }
            else {
                //scissors
               // ctx.fillText("Cpu chose scissors. You win", canvas.width/2, 280);
                results = "Cpu chose scissors. You win";
                draw(hrock,paper,scissors,rock,paper,hscissors);
            }
            break;


        case "paper":
            if (cpuChoice == 0) {
                //rock
                //ctx.fillText("Cpu chose rock. You win", canvas.width/2, 280);
                results = "Cpu chose rock. You win";
                draw(rock,hpaper,scissors,hrock,paper,scissors);
            }
            else if (cpuChoice == 1) {
                //paper
                //ctx.fillText("Cpu chose paper. It's a tie", canvas.width/2, 280);
                results = "Cpu chose paper. It's a tie";
                draw(rock,hpaper,scissors,rock,hpaper,scissors);
            }
            else {
                //scissors
               // ctx.fillText("Cpu chose scissors. You lose", canvas.width/2, 280);
                results = "Cpu chose scissors. You lose";
                draw(rock,hpaper,scissors,rock,paper,hscissors);
            }
            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                //ctx.fillText("Cpu chose rock. You lose", canvas.width/2, 280);
                results = "Cpu chose rock. You lose";
                draw(rock,paper,hscissors,hrock,paper,scissors);
            }
            else if (cpuChoice == 1) {
                //paper
                //ctx.fillText("Cpu chose paper. You win", canvas.width/2, 280);
                results = "Cpu chose paper. You win";
                draw(rock,paper,hscissors,rock,hpaper,scissors);
            }
            else {
                //scissors
               // ctx.fillText("Cpu chose scissors. It's a tie", canvas.width/2, 280);
                results = "Cpu chose scissors. It's a tie";
                draw(rock,paper,hscissors,rock,paper,hscissors);
            }
            break;
    }
    }
}