const game = document.querySelector('#game')
const numOne = document.querySelector('#numOne');
const numTwo = document.querySelector('#numTwo');
const inputValue = document.querySelector('#inputValue')
const checkButton = document.querySelector('#checkButton')
const goodAnswersCounter = document.querySelector('#goodAnswersCounter')
const goodAnswersCounterInGameOver = document.querySelector('#goodAnswersCounterInGameOver')
const goodAnswers = document.querySelector('#goodAnswers')
const badAnswers = document.querySelector('#badAnswers')
const level = document.querySelector('#level')
const liveHeart = document.querySelector('#liveHeart')
const gameOver = document.querySelector('#gameOver')
const startGame = document.querySelector('#startGame')
const timer = document.querySelector('#timer')

let x, y, v
let answers = 0;
let heart = 3;
let second = 0;

const displayCounter = () => {
    second++;
    if (timer) {
        timer.innerHTML = 'Time: ' + second + 's';
    }
}

const startNewGame = () => {
    window.location.reload();
}

const gameOverModal = () => {
    if (heart === 0) {
        gameOver.classList.add('flex')
        game.classList.add('none')
    }
}

const generateQuestion = () => {
    if (answers <= 10) {
        x = Math.floor(Math.random() * 11);
        y = Math.floor(Math.random() * 11);
        level.innerHTML = '🐳 Level: 1';
        level.style.color = 'blue';
    } else if (answers <= 20) {
        x = Math.floor(Math.random() * 21) + 10;
        y = Math.floor(Math.random() * 21) + 10;
        level.innerHTML = '🐸 Level: 2';
        level.style.color = 'green';
    } else if (answers <= 30) {
        x = Math.floor(Math.random() * 31) + 20;
        y = Math.floor(Math.random() * 31) + 20;
        level.innerHTML = '🐱 Level: 3';
        level.style.color = 'gold';
    } else if (answers <= 40) {
        x = Math.floor(Math.random() * 41) + 30;
        y = Math.floor(Math.random() * 41) + 30;
        level.innerHTML = '🦊 Level: 4';
        level.style.color = 'orange';
    } else {
        x = Math.floor(Math.random() * 51) + 40;
        y = Math.floor(Math.random() * 51) + 40;
        level.innerHTML = '🐙 Level: 5';
        level.style.color = 'red'
    }

    if (answers === 1) {
        setInterval(function () {
            displayCounter();
        }, 1000)
    }

    v = x + y;

    numOne.innerHTML = x;
    numTwo.innerHTML = y;
    inputValue.value = '';
    liveHeart.innerHTML = "Live: " + heart;
}

const checkAnswers = () => {
    const userInput = parseInt(inputValue.value, 10)

    if (userInput === v) {
        answers++;
        goodAnswersCounter.innerHTML = "Correct Answers: " + answers;
        goodAnswersCounterInGameOver.innerHTML = "Correct Answers: " + answers;
        goodAnswers.style.display = 'flex'
        badAnswers.style.display = 'none'
        inputValue.classList.add('good-border');
        generateQuestion();

        setTimeout(() => {
            inputValue.classList.remove('good-border'),
                goodAnswers.style.display = 'none'
        }, 2000)
    } else {
        heart--;
        inputValue.value = '';
        liveHeart.innerHTML = "Live: " + heart;
        goodAnswers.style.display = 'none'
        badAnswers.style.display = 'flex'
        inputValue.classList.add('bad-border');
        gameOverModal();

        setTimeout(() => {
            inputValue.classList.remove('bad-border'),
                badAnswers.style.display = 'none'
        }, 2000)
    }
}

const checkEnter = (event) => {
    if (event.key === "Enter") {
        checkAnswers();
    }
}

generateQuestion();
startGame.addEventListener('click', startNewGame);
checkButton.addEventListener('click', checkAnswers);
inputValue.addEventListener('keypress', checkEnter);