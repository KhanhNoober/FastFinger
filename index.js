const input = document.querySelector('#input');
const word = document.querySelector('#word');
const timeLeft = document.querySelector('#time-left');
const error = document.querySelector('#error');
const score = document.querySelector('#score');
const displayError = document.querySelector('#display-error');
const displayScore = document.querySelector('#display-score');

const html = document.querySelector('html');
const start = document.querySelector('#start');

const MAX_ERROR = 5;

let timer;
let time = 100;

let currentWord = "";

let currentScore = 0;
let currentError = 0;
let isStarting = false;

/* For clicking on keyboard */
function addInput(e) {
    if (isStarting) {
        input.value += e;
    }
}

/* Keyboard press event on the entire html */
html.addEventListener('keypress', (e) => {
    try {
        let key = document.querySelector(`#${e.key.toUpperCase()}`);
        key.classList.add('active-key');
    }
    catch { }
});

html.addEventListener('keyup', (e) => {
    try {
        let key = document.querySelector(`#${e.key.toUpperCase()}`);
        key.classList.remove('active-key');
    }
    catch { }
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (input.value === currentWord) {
            currentScore += 1;

            displayScore.classList.add('correct');

            setTimeout(() => {displayScore.classList.remove('correct')}, 1000);
            score.innerText = currentScore;
        } else {
            displayError.classList.add('error');

            setTimeout(() => {displayError.classList.remove('error')}, 1000);

            currentError += 1;
            error.innerText = currentError;
            if (currentError === MAX_ERROR) {
                lost();
            }
        }
        input.value = "";
        changeWord();
    }
});

/* Handle time functions */
function stopTime() {
    clearInterval(timer);
}

function resetTime() {
    time = 100;
}

/* Handle lost functions */
const finalScore = document.querySelector('#final-score');
const finalError = document.querySelector('#final-error');

function lost() {
    isStarting = false;
    input.disabled = true;
    stopTime();

    finalScore.innerText = currentScore;
    finalError.innerText = currentError;

    nofication.classList.remove('hide');
    restart.classList.remove('hide');
}

/* Handle word functions*/
function changeWord() {
    resetTime();
    currentWord = words[Math.floor(Math.random() * 99 + 1)];
    word.innerText = currentWord;
}

/* Start the game */
function startTheGame() {
    changeWord();

    input.disabled = false;
    input.focus();

    currentError = 0;
    currentScore = 0;
    error.innerText = currentError;
    score.innerText = currentScore;

    timer = setInterval(() => {
        time -= 1;
        timeLeft.innerText = (time / 10).toFixed(1);
        if (time == 0) {
            lost();
        }
    }, 100);
};

/* play function*/
const nofication = document.querySelector('#nofication');

const countDown = document.querySelector('#countdown');

const firstCome = document.querySelector('#first-come');
const restart = document.querySelector('#restart');

function playGame() {
    firstCome.classList.add('hide');
    restart.classList.add('hide');

    countDown.classList.remove('hide');

    let timercountDown;
    let count = 3;
    countDown.innerHTML = `<h1>${count}</h1>`;

    timercountDown = setInterval(() => {
        count -= 1;
        countDown.innerHTML = `<h1>${count}</h1>`;
        if (count === 0) {
            clearInterval(timercountDown);
            countDown.classList.add('hide');
            isStarting = true;

            nofication.classList.add('hide');
            startTheGame();
        }
    }, 1000);
};








