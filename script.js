const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const start = document.getElementById('start');
const gameOver = document.getElementById('gameOver');

const boardSize = 10;
const gameSpeed = 100;
const squareTyper = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft:-1
}

let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;



const startGame = () =>{
    setGame();
}
startButton,addEventListener('click', StartGame);