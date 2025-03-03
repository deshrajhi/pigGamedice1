'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value() = 23;

// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function ());


let secretNumber = Math.trunc(Math.random() * 2) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.btn-check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.Score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.Score').textContent = 0;
        }
    }
});

document.querySelector('.btn-again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 2) + 1;
    
    displayMessage('Start Guessing....');
    document.querySelector('.Score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
