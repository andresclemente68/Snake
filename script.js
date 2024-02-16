const gameArea = document.getElementById('gameArea');
let snake = [{ x: 10, y: 10 }];
let food = {};
let direction = 'right';
let intervalId;

function createFood() {
    food.x = Math.floor(Math.random() * 20) * 20;
    food.y = Math.floor(Math.random() * 20) * 20;
}

function draw() {
    gameArea.innerHTML = '';
    snake.forEach(segment => {
        const snakeBody = document.createElement('div');
        snakeBody.className = 'snakeBody';
        snakeBody.style.left = segment.x + 'px';
        snakeBody.style.top = segment.y + 'px';
        gameArea.appendChild(snakeBody);
    });

    const foodElement = document.createElement('div');
    foodElement.className = 'food';
    foodElement.style.left = food.x + 'px';
    foodElement.style.top = food.y + 'px';
    gameArea.appendChild(foodElement);
}

function move() {
    const head = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
        case 'up':
            head.y -= 20;
            break;
        case 'down':
            head.y += 20;
            break;
        case 'left':
            head.x -= 20;
            break;
        case 'right':
            head.x += 20;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        createFood();
    } else {
        snake.pop();
    }
}

function gameOver() {
    clearInterval(intervalId);
    alert('Game Over!');
}

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
});

function gameLoop() {
    move();
    draw();

    if (snake[0].x < 0 || snake[0].x >= 400 || snake[0].y < 0 || snake[0].y >= 400) {
        gameOver();
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            gameOver();
        }
    }
}

createFood();
intervalId = setInterval(gameLoop, 100);
