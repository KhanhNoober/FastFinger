const input = document.querySelector('#input');
const word = document.querySelector('#word');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const html = document.querySelector('html');
const start = document.querySelector('#start');

const MAX_ERROR = 5;

let timer;
let time = 100;

let currentWord = "";

let currentScore = 0;
let currentError = 0;
let isStarting = false;

function addInput(e) {
    if(isStarting) {
        input.value += e;
    }
}

html.addEventListener('keypress', (e) => {
    try {
        let key = document.querySelector(`#${e.key.toUpperCase()}`);
        key.classList.add('active-key');
    }
    catch {}
});

html.addEventListener('keyup', (e) => {
    try {
        let key = document.querySelector(`#${e.key.toUpperCase()}`);
        key.classList.remove('active-key');
    }
    catch {}
});

function stopTime() {
    clearInterval(timer);
}

function lost() {
    isStarting = false;
    input.disabled = true;
    stopTime();
}

start.addEventListener('click', () => {
    changeWord();
    input.disabled = false;
    input.focus();
    timer = setInterval(() => {
        time -= 1;
        timeLeft.innerText = (time / 10).toFixed(1);
        if (time == 0) {
            lost();
        }
    }, 100);
});

function resetTime() {
    time = 100;
}

function changeWord() {
    resetTime();
    currentWord = words[Math.floor(Math.random() * 99 + 1)];
    word.innerText = currentWord;
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if(input.value === currentWord) {
            currentScore += 1;
            score.innerText = currentScore;
        } else {
            currentError += 1;
            if(currentError === MAX_ERROR) {
                lost();
            }
        }
        input.value = "";
        changeWord();
    }
});




