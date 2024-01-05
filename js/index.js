const PADDLE_WIDTH = 200;
const PADDLE_HEIGHT = 16;
const BRICKS_WIDTH = 60;
const BRICKS_HEIGHT = 70;
const BALL_RADIUS = 12;
const FULL_X_SPEED = 7;
var stage;
var paddle;
var ball;
var bricks = [];
var score = 0;
var lives = 3;
var scoreText;
var gameStarted = false;
const KEYCODE_LEFT = 37;
   const KEYCODE_RIGHT = 39
   const SPACEBAR = 32;
   var keyboardMoveLeft = false;
   var keyboardMoveRight = false;
   var highScore = 0;
   let msg;

const textMsg = document.querySelector(".modeltext");
const modal = document.querySelector(".modalContainer");


function init()
{
    modal.style.display = "none";
    if(typeof(Storage) !== "undefined") {
        if(localStorage.highScore==undefined)
        {
            localStorage.highScore = 0;
        }
        highScore = localStorage.highScore;
        

    } else {
        highScore = 0;
    }

    stage = new createjs.Stage("myCanvas");
    createjs.Touch.enable(stage);
    createPaddle();
    createBall();
    createBrickGrid('#FFF'); 
    createScoreText();

    stage.canvas.height = 720;
    // stage.canvas.width = 2560;
    

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick); //Changed to tick from stage

    stage.on("stagemousedown", function(event) 
        { 
            startLevel();

            
        });

    stage.on("stagemousemove", function (event)
    {
        paddle.x = stage.mouseX;
    });

    //keyboard handlers
       window.onkeyup = keyUpHandler;
       window.onkeydown = keyDownHandler;
}

function refreshPage(){
    window.location.reload();
} 

function startLevel()
{
    if(!gameStarted)
            {
                console.log("Start Game");
                gameStarted = true; 
                ball.xSpeed = 5; 
                ball.ySpeed = 5;
                ball.up = true;
                ball.right = (Math.Random <= 0.50 ? true : false);
            }
}

function keyDownHandler(e)
 {
       switch(e.keyCode)
       {
    case KEYCODE_LEFT:  keyboardMoveLeft = true; break;
    case KEYCODE_RIGHT: keyboardMoveRight = true; break;
    case SPACEBAR: startLevel(); break;
    } 
  }

  function keyUpHandler(e)
 {
       switch(e.keyCode)
       {
        case KEYCODE_LEFT:  keyboardMoveLeft = false; break;
        case KEYCODE_RIGHT: keyboardMoveRight = false; break;
    } 
}

function addToScore(points)
{
    score+=points;

                // updateStatusLine();
}

function createScoreText()
{
    // scoreText = new createjs.Text("Score: 0", "16px Arial", "#000000");
    scoreText = new createjs.Text("");
    addToScore(0);
    scoreText.y = 700;
    //scoreText.y = 16;
    stage.addChild(scoreText);
}

// function updateStatusLine()
// {
//     scoreText.text = "Score: "+score + " / Lives: "+lives+" / High Score: "+highScore;
// }

function loseLife()
{
    console.log("Lose A Life");
    lives--;
    ball.xSpeed = 0;
    ball.ySpeed = 0;
    ball.x = paddle.x;
    ball.y = paddle.y - PADDLE_HEIGHT/2 - BALL_RADIUS;
    gameStarted = false;

    if(lives==0)
    {
        
        if(highScore<score)
        {
            highScore = score;
            localStorage.highScore = score;
            modal.style.display = "block";
            textMsg.innerHTML = 'Well done! New High Score: ' + score + ' points';
                    }
        else
        {
            modal.style.display = "block";
            textMsg.innerHTML = 'Well done! You scored: ' + score + ' points, try to beat your high score';
        }

        lives = 3;
        score = 0;

        
    }
    // updateStatusLine();
}

function reset(){
    localStorage.highScore = 0;
}

function tick(event)
{
    if(keyboardMoveLeft)
        {
            console.log("Keyboard - Left");
            paddle.x-=5;
        }
    if(keyboardMoveRight)
        {
            console.log("Keyboard - Right");
            paddle.x+=5;
        }

    if(paddle.x+PADDLE_WIDTH/2>stage.canvas.width)
        {
            paddle.x = stage.canvas.width - PADDLE_WIDTH/2;
        }
    if(paddle.x-PADDLE_WIDTH/2<0)
        {
            paddle.x = PADDLE_WIDTH/2;
        }
    
    
    if(!gameStarted)
    {
        ball.x = paddle.x;
        ball.y = paddle.y - PADDLE_HEIGHT/2  - BALL_RADIUS;
        stage.update();
        return;
    }


    if(ball.up)
    {
        ball.y -= ball.ySpeed;
        
    }
    else
    {
        ball.y += ball.ySpeed;
    }

    if(ball.right)
    {
        ball.x += ball.xSpeed;
    }
    else
    {
        ball.x -= ball.xSpeed;
    }

    for(var i=0;i<bricks.length;i++)
    {
        if(checkCollision(ball,bricks[i]))
        {

            addToScore(100*lives);
            console.log("Brick Hit / New Score: "+score);
            destroyBrick(bricks[i]);
            bricks.splice(i,1);
            i--;

        if (bricks.length==0)
        {
            
             var str = '#F00';

            createBrickGrid(str);
            lives += 1;
        }

        }


        
    }

    if(checkCollision(ball,paddle))
    {
        newBallXSpeedAfterCollision(ball,paddle);
    }

    //Check if we've reached the walls

    if(ball.x+BALL_RADIUS>=stage.canvas.width)
    {
        ball.x = stage.canvas.width-BALL_RADIUS;
        ball.right = false;
    }

    if(ball.x-BALL_RADIUS<=0)
    {
        ball.x = BALL_RADIUS;
        ball.right = true;
    }

    if(ball.y-BALL_RADIUS<=0)
    {
        ball.y = BALL_RADIUS;
        ball.up = false;
    }

    if(ball.y+BALL_RADIUS>=stage.canvas.height)
    {
        loseLife();
    }

    ball.lastX = ball.x;
    ball.lastY = ball.y;

    stage.update();
}

function checkCollision(ballElement,hitElement)
{
    var leftBorder = (hitElement.x - hitElement.getBounds().width/2);
    var rightBorder = (hitElement.x + hitElement.getBounds().width/2);
    var topBorder = (hitElement.y - hitElement.getBounds().height/2);
    var bottomBorder = (hitElement.y + hitElement.getBounds().height/2);
    var previousBallLeftBorder = ballElement.lastX - BALL_RADIUS;
    var previousBallRightBorder = ballElement.lastX + BALL_RADIUS;
    var previousBallTopBorder = ballElement.lastY - BALL_RADIUS;
    var previousBallBottomBorder = ballElement.lastY + BALL_RADIUS;
    var ballLeftBorder = ballElement.x - BALL_RADIUS;
    var ballRightBorder = ballElement.x + BALL_RADIUS;
    var ballTopBorder = ballElement.y - BALL_RADIUS;
    var ballBottomBorder = ballElement.y + BALL_RADIUS;


    if((ballLeftBorder<=rightBorder) && (ballRightBorder >= leftBorder) && (ballTopBorder <= bottomBorder) && (ballBottomBorder >= topBorder))
    {


        if((ballTopBorder <= bottomBorder)&&(previousBallTopBorder > bottomBorder))
        {
            //Hit from the bottom
            ballElement.up = false;
            ballElement.y = bottomBorder + BALL_RADIUS;
        }

        if((ballBottomBorder >= topBorder)&&(previousBallBottomBorder<topBorder))
        {
            //Hit from the top
            ballElement.up = true;
            ballElement.y = topBorder - BALL_RADIUS;
        }
        if((ballLeftBorder<=rightBorder)&&(previousBallLeftBorder>rightBorder))
        {
            //Hit from the right
            ballElement.right = true;
            ballElement.x = rightBorder + BALL_RADIUS;
        }

        if((ballRightBorder >= leftBorder)&&(previousBallRightBorder < leftBorder))
        {
            //Hit from the left
            ballElement.right = false;
            ballElement.x = leftBorder - BALL_RADIUS;
        }

        ballElement.lastX = ballElement.x;
        ballElement.lastY = ballElement.y;
        return true;
    }
    return false;
}

function newBallXSpeedAfterCollision(ballElement,hitElement)
{
    var startPoint = hitElement.x - hitElement.getBounds().width/2;
    var midPoint =  hitElement.x;
    var endPoint = hitElement.x + hitElement.getBounds().width/2;

    if(ballElement.x<midPoint)
    {
        ball.right = false;
        ball.xSpeed = FULL_X_SPEED - ((ballElement.x - startPoint)/(midPoint-startPoint)) * FULL_X_SPEED
    }
    else
    {
        ball.xSpeed = FULL_X_SPEED - ((endPoint - ballElement.x)/(endPoint-midPoint)) * FULL_X_SPEED
        ball.right = true;	
    }
}


function createBrickGrid(c)
{
    for(var i = 0;i<30;i++)
        for(var j = 0;j<5;j++)
        {
            createBrick(i*(100)+40,j*(60)+150,c);
        }
}

function createBrick(x, y, c) {
    var brick = new createjs.Shape();
    
    // Adjusted the beginFill method to include border radius
    brick.graphics.beginFill("#000").beginStroke("transparent").setStrokeStyle(1).drawRoundRect(0, 0, 95, 55, 8);
    
    brick.regX = BRICKS_WIDTH / 1;
    brick.regY = BRICKS_HEIGHT / 3;
    brick.x = x;
    brick.y = y;
    brick.setBounds(brick.regX, brick.regY, BRICKS_WIDTH, BRICKS_HEIGHT);
    stage.addChild(brick);
    bricks.push(brick);
}


function destroyBrick(brick)
{
    createjs.Tween.get(brick,{}).to({scaleX:0,scaleY:0}, 500)
    setTimeout(removeBrickFromScreen,500,brick)
}

function removeBrickFromScreen(brick)
{
    stage.removeChild(brick)
}

function createBall()
{
    ball = new createjs.Shape();
    ball.graphics.beginFill("White").drawCircle(0,0, BALL_RADIUS);
    ball.x = paddle.x;
    ball.y = paddle.y - PADDLE_HEIGHT/2  - BALL_RADIUS;
    stage.addChild(ball);

    ball.up = true;
    ball.right = true;
    ball.xSpeed = 0;
    ball.ySpeed = 0;
    ball.lastX = 0;
    ball.lastY = 0;
}

function createPaddle() {
    paddle = new createjs.Shape();
    paddle.width = PADDLE_WIDTH;
    paddle.height = PADDLE_HEIGHT;

    // Adjusted the drawRect method to include border radius
    paddle.graphics
        .beginFill('black')
        .beginStroke("black")
        .drawRoundRect(0, 0, paddle.width, paddle.height, 8);

    paddle.x = stage.canvas.width / 2 - PADDLE_WIDTH / 2;
    paddle.y = 650;
    paddle.regX = PADDLE_WIDTH / 2;
    paddle.regY = PADDLE_HEIGHT / 2;
    paddle.setBounds(paddle.regX, paddle.regY, PADDLE_WIDTH, PADDLE_HEIGHT);
    stage.addChild(paddle);
}



function displayName()
{   
    $('#myCanvas').show();  
    $('.gameIcon').hide();  
    $('#welcomemsg').hide();  
    $('#displayName').show('slow');
    var username = $("#username").val();
    $('#welcometext').text('Welcome ' + username + ' and good luck!');
}

function getRandomWholeNumber() {
    return Math.random() * (1 - 9) + 1;
}