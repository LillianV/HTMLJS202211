var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var score = 0;
var highScore= 0;
var currentState = 0;
var gameState = [];
var numLives = 3;




//asteroid variables
var numAsteroids = 15
var asteroids = [];

//Player ship variables
var ship = new PlayerShip();
var shipSprite = new Image();
shipSprite.src = "images/spaceship.png";

//create keyboard event handlers
document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 38) {
            //code for up
            ship.up = true;
        }
        if (e.keyCode == 37) {
            //code for left
            ship.left = true;
        }
        if (e.keyCode == 39) {
            //code for right
            ship.right = true;
        }
        if (e.keyCode == 40) {
            //code for down
            ship.down = true;
        }
    
    }

    if(gameOver){
        if(e.keyCode == 32){
            if(currentState == 2){
                //gameover screen
                currentState = 0;
                numAsteroids = 15;
                asteroids=[];
                score = 0;
                //start game here
                main();
                
            }else{
                //main menu screen
                gameStart();
                currentState = 1;
                gameOver = false;
                main();
                scoreTimer();
                console.log(currentState)
            } 
        }
    }


}
function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 38) {
            //code for up (arrow keys)
            ship.up = false;
        }
        if (e.keyCode == 37) {
            //code for left
            ship.left = false;
        }
        if (e.keyCode == 39) {
            //code for right
            ship.right = false;
        }
        if (e.keyCode == 40) {
            //code for down
            ship.down = false;
        }
    }
}


//asteroid class
function Asteroid() {
    //properties to draw asteroid
    this.radius = randomRange(18, 5);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height;
    this.vy = randomRange(10, 5);
    this.color = "darkslategrey";

    //methods/function to draw asteroid
    this.drawAsteroid = function () {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        //console.log(this.x,this.y,this.radius, this.color);
    }

}

function PlayerShip() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 20;
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;
    this.flameLength = 30

    this.drawShip = function () {
        ctx.save();
        ctx.translate(this.x, this.y);

        //draw fire
        if(this.up || this.left || this.right || this.down){
            ctx.save();
            if(this.flameLength == 30){
                this.flameLength = 20;
                ctx.fillStyle = "yellow";
            }else{
                this.flameLength = 30;
                ctx.fillStyle = "orange";
            }
            //draw flame
            ctx.beginPath();
            ctx.moveTo(0,this.flameLength);
            ctx.lineTo(5,5);
            ctx.lineTo(-5,5);
            ctx.lineTo(0,this.flameLength);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        //draw the ship
        ctx.drawImage(shipSprite,this.y,this.x);
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(10, 10);
        ctx.lineTo(-10, 10);
        ctx.lineTo(0, -10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    this.moveShip = function () {
        this.x += this.vx;
        this.y += this.vy;

        //adding boundaries for screen
        //bottom boundary
        if (this.y > canvas.height - this.height / 2) {
            this.y = canvas.height - this.height / 2;
            this.vy = 0;
        }

        //top boundary
        if (this.y < this.height / 2) {
            this.y = this.height / 2;
            this.vy = 0;
        }

        //left boundary
        if (this.x > canvas.width - this.width / 2) {
            this.x = canvas.width - this.width / 2;
            this.vx = 0;
        }
        if (this.x < this.width / 2) {
            this.x = this.width / 2;
            this.vx = 0;
        }

    }
}



function main() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    gameState[currentState]();

    if (!gameOver) {
        //refresh screen
        timer = requestAnimationFrame(main);
    } 
}

//game state machine
//main menu state
gameState[0]=function(){
    //code for main menus
    console.log(gameOver)
    ctx.save();
    ctx.font = "30px New Times Roman";
    ctx.fillStyle = "aliceblue";
    ctx.textAlign = "center";
    ctx.fillText("Asteroid Avoider",canvas.width/2,canvas.height/2 - 30);
    ctx.font = "15px New Times Roman";
    ctx.fillText("Press Space to start", canvas.width/2, canvas.height/2+20);
    ctx.restore();
}
//play game state
gameState[1]=function(){
    //code for game play state
    if(numLives=0){
        gameOver = true;
    }
     //draw score to screen
     ctx.save();
     ctx.font = "15px New Times Roman";
     ctx.fillStyle = "aliceblue";
     ctx.fillText(`Score:${score}`,canvas.width - 150, 30);
     ctx.fillText(`Lives:${numLives}`,canvas.width - 150, 50);
     ctx.restore();

     //draw ship
    ship.moveShip();
    ship.drawShip();
 
     //vertical move
     if (ship.up) {
         ship.vy = -10;
     } else if (ship.down) {
         ship.vy = 10;
     } else {
         ship.vy = 0;
     }
     //horizontal movement
     if (ship.left) {
         ship.vx = -5;
     } else if (ship.right) {
         ship.vx = 5;
     } else {
         ship.vx = 0;
     }
 
     for (var i = 0; i < asteroids.length; i++) {
 
         var dX = ship.x - asteroids[i].x;
         var dY = ship.y - asteroids[i].y;
         var distance = Math.sqrt((dX * dX) + (dY * dY));
 
         //collision detection happens
         if (detectCollision(distance, (ship.height / 2 + asteroids[i].radius))&&stopCollision) {
            numLives -= 1;
            setTimeout(stopCollision, 3000);
            if(numLives=0){
                gameOver = true;
                currentState = 2;
                main();
                return;  
            }
             
         }
 
         if (asteroids[i].y > canvas.height + asteroids[i].radius) {
             asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;
             asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius);
         }
         asteroids[i].y += asteroids[i].vy;
         asteroids[i].drawAsteroid();
     }
     //adds asteroids
     while(asteroids.length<numAsteroids){
        asteroids.push(new Asteroid());
    }
}

gameState[2]=function(){
    if(score>highScore){
        highScore = score;
        ctx.save();
    ctx.font = "30px New Times Roman";
    ctx.fillStyle = "aliceblue";
    ctx.textAlign = "center";
    ctx.fillText("Game Over, Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 - 80);
    ctx.font = "25px New Times Roman";
    ctx.fillText("Your New High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 - 40);
    ctx.fillText("New Record!", canvas.width/2, canvas.height/2);
    ctx.font = "20px New Times Roman";
    ctx.fillText("Press Space to play again", canvas.width/2, canvas.height/2 + 50);
    ctx.restore();

    }else{
      //gameover menu
    ctx.save();
    ctx.font = "30px New Times Roman";
    ctx.fillStyle = "aliceblue";
    ctx.textAlign = "center";
    ctx.fillText("Game Over, Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 - 80);
    ctx.font = "25px New Times Roman";
    ctx.fillText("Your High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 - 40);
    ctx.font = "20px New Times Roman";
    ctx.fillText("Press Space to play again", canvas.width/2, canvas.height/2 + 20);
    ctx.restore();  
    }
    
}

//utility functions
function gameStart(){
    //for loop to instanitate asteroids for game
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }

    ship = new PlayerShip();
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance;
}
function stopCollision(){
    detectCollision=false;
}

function scoreTimer(){
    if(!gameOver){
        score++;
        if(score % 5 == 0){
            numAsteroids+=5;
            console.log(numAsteroids);
        }
        //calls score timer every sec
        setTimeout(scoreTimer, 1000);
    }
}
function lifeCounter(){
    if(!gameOver){
        numLives==0;
    }
}