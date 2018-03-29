
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var snake = [{x:10, y:10}];
var fruit = {};
var score = 0;
var dir = "";
var accessKeyboard = true;


createFruit();
game();

function game() {
    ctx.clearRect(0, 0, 632, 632);
    testCollision();
    drawFruit();
    drawSnake();
    drawScore();
    collision();
    setTimeout("game()", 90);
}

function drawScore() {
    var board = document.getElementById('score');
    board.innerHTML = "Score: " + score;
}



function addSnake() {
    var x = snake[0].x;
    var y = snake[0].y;
    if (dir == "left") x -= 1;
    if (dir == "right") x += 1;
    if (dir == "up") y -= 1;
    if (dir == "down") y += 1;
    var obj = {};
    obj.x = x;
    obj.y = y;
    snake.unshift(obj);
    createFruit();
    score++;
}

function testCollision() {
    var x = snake[0].x;
    var y = snake[0].y;
    if (dir == "left") x -= 1;
    if (dir == "right") x += 1;
    if (dir == "up") y -= 1;
    if (dir == "down") y += 1;
    if (fruit.x == x && fruit.y == y) {
        addSnake();
        return;
    }
    stepSnake();
}

function wallCollision(val) {
    if (val < 0) val = 20;
    if (val > 20) val = 0;
    return val;
}

function stepSnake() {
    var x = 0;
    var y = 0;
    var obj = {};
    obj.x = snake[0].x;
    obj.y = snake[0].y;
    if (dir == "left") x -= 1;
    if (dir == "right") x += 1;
    if (dir == "up") y -= 1;
    if (dir == "down") y += 1;
    obj.x = wallCollision(obj.x + x);
    obj.y = wallCollision(obj.y + y);
    if(dir) {
        snake.pop();
        snake.unshift(obj);
    }
}

document.onkeydown = function(event) {
    if (accessKeyboard) {
        if (event.keyCode == 37 && dir != "right") dir = "left";
        if (event.keyCode == 38 && dir != "down") dir = "up";
        if (event.keyCode == 39 && dir != "left") dir = "right";
        if (event.keyCode == 40 && dir != "up") dir = "down";
    }
}

function collision() {
    if (snake.length > 4) {
        var x = snake[0].x;
        var y = snake[0].y;
        for (var i = 4; i < snake.length; i++) {
            if (snake[i].x == x && snake[i].y == y) {
                dir = "";
                snake = [{x:10, y:10}];
                createFruit();
                alert("Score: " + score);
                score = 0;
            }
        }
    }
}

function drawFruit() {
    var x = fruit.x*30+2;
    var y = fruit.y*30+2;
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, 28, 28);
}

function createFruit() {
    var x = Math.floor(Math.random()*21);
    var y = Math.floor(Math.random()*21);
    for (var i = 0; i < snake.length; i++) {
        if (x == snake[i].x && y == snake[i].y) {
            createFruit();
            return;
        }
    }
    fruit.x = x;
    fruit.y = y;
    
}

function drawSnake() {
    ctx.fillStyle = 'red';
    for (var i = 0; i < snake.length; i++) {
        var x = snake[i].x*30+2;
        var y = snake[i].y*30+2;
        ctx.fillRect(x, y, 28, 28);
    }
}




