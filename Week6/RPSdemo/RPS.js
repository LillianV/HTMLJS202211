//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//drawing the font
ctx.font = "40px New Times Roman";
ctx.fillStyle = "green";
ctx.strokeStyle = "aliceblue";
ctx.fillText("Welcome to the RPS Game!", 125, 100);
ctx.strokeText("Welcome to the RPS Game!", 125, 100);
//ctx.clearRect(0,0,canvas.width, canvas.height);




//alert("select rock, paper or scissors");
var rps = ["rock", "paper", "scissors"];
//console.log(rps[0]);

document.getElementById("rock").addEventListener('click', function (e) {
    alert("You picked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click', function (e) {
    alert("You picked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click', function (e) {
    alert("You picked " + rps[2]);
    playGame(rps[2]);
});

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("Cpu chose rock. It's a tie", 125, 280);
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("Cpu chose paper. You lose", 125, 280);
            }
            else {
                //scissors
                ctx.fillText("Cpu chose scissors. You win", 125, 280);
            }
            break;


        case "paper":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("Cpu chose rock. You win", 125, 280);
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("Cpu chose pape. It's a tie", 125, 280);
            }
            else {
                //scissors
                ctx.fillText("Cpu chose scissors. You lose", 125, 280);
            }
            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                ctx.fillText("Cpu chose rock. You lose", 125, 280);
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.fillText("Cpu chose paper. You win", 125, 280);
            }
            else {
                //scissors
                ctx.fillText("Cpu chose scissors. It's a tie", 125, 280);
            }
            break;
    }
}