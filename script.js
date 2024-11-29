const numOne = document.querySelector('.numOne');
const numTwo = document.querySelector('.numTwo');
const numThree = document.querySelector('.numThree')
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const good = document.querySelector('.good')
const bad = document.querySelector('.bad')
const goodAnswer = document.querySelector('.goodAnswers');
const lev = document.querySelector('.lev');
const live = document.querySelector('.live')
const game = document.querySelector('.game')
const newGame = document.querySelector('.newGame')
const start = document.querySelector('.start')

let x, y, v
let answers = 0;
let heart = 3;
const sign = ['+', '-', '*', '/']

const startNewGame = () => {
    window.location.reload();
}

const gameOver = () => {
    if (heart === 0) {
        newGame.classList = 'flex'
        game.classList = 'none';
    }
}

const checkLevels = () => {
    if (answers <= 10) {
        lev.innerHTML = 'Level: 1';
    } else if (answers <= 20) {
        lev.innerHTML = 'Level: 2';
    } else if (answers <= 30) {
        lev.innerHTML = 'Level: 3';
    } else if (answers <= 40) {
        lev.innerHTML = 'Level: 4';
    } else {
        lev.innerHTML = 'Level: 5';
    }
}

const generateQuestion = () => {
    if (answers <= 10) {
        x = Math.floor(Math.random() * 11);
        y = Math.floor(Math.random() * 11);
    } else if (answers <= 20) {
        x = Math.floor(Math.random() * 21) + 10;
        y = Math.floor(Math.random() * 21) + 10;
    } else if (answers <= 30) {
        x = Math.floor(Math.random() * 31) + 20;
        y = Math.floor(Math.random() * 31) + 20;
    } else if (answers <= 40) {
        x = Math.floor(Math.random() * 41) + 30;
        y = Math.floor(Math.random() * 41) + 30;
    } else {
        x = Math.floor(Math.random() * 51) + 40;
        y = Math.floor(Math.random() * 51) + 40;
    }

    v = x + y;

    numOne.innerHTML = x;
    numTwo.innerHTML = y;
    input.value = '';
    live.innerHTML = "Ilość żyć: " + heart;
}

const checkAnswer = () => {
    const userInput = parseInt(input.value, 10)

    if (userInput === v) {
        answers++;
        goodAnswer.innerHTML = "Poprawne odpowiedzi: " + answers;
        good.style.display = 'flex'
        bad.style.display = 'none'
        input.classList.add('goodborder');
        checkLevels();
        generateQuestion();

        setTimeout(() => {
            input.classList.remove('goodborder'),
                good.style.display = 'none'
        }, 2000)
    } else {
        heart--;
        input.value = '';
        live.innerHTML = "Ilość żyć: " + heart;
        good.style.display = 'none'
        bad.style.display = 'flex'
        input.classList.add('badborder');
        gameOver();

        setTimeout(() => {
            input.classList.remove('badborder'),
                bad.style.display = 'none'
        }, 2000)
    }
}

const checkEnter = (event) => {
    if (event.key === "Enter") {
        checkAnswer();
    }
}

generateQuestion();
start.addEventListener('click', startNewGame);
button.addEventListener('click', checkAnswer);
input.addEventListener('keypress', checkEnter);