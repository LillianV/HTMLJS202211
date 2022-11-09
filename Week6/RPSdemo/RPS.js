//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//drawing the font
ctx.font = "40px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle = "yellow";
ctx.fillText("Welcome to the RPS Game!", 125, 280);
ctx.strokeText("Welcome to the RPS Game!", 125, 280);




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
                alert("cpu chose rock. Its a tie");
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper. You lose")
            }
            else {
                //scissors
                alert("cpu chose scissors. You win")
            }
            break;


        case "paper":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chose rock. You win");
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper. Its a tie")
            }
            else {
                //scissors
                alert("cpu chose scissors. You lose")
            }
            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                alert("cpu chose rock. You lose");
            }
            else if (cpuChoice == 1) {
                //paper
                alert("cpu chose paper. You win")
            }
            else {
                //scissors
                alert("cpu chose scissors. Its a tie")
            }
            break;
    }
}