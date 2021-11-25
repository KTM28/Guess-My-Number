'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Logic for main functionality of the game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When the input is empty
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // logic for highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is high or low
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
    // guess > secretNumber ? '📈 Too high!' : '📉 Too low';
    score--;
    document.querySelector('.score').textContent = score;

    // When Player loses the game
  } else {
    // document.querySelector('.message').textContent = '🤦🏽‍♂️ You lost the game!';
    displayMessage('🤦🏽‍♂️ You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

// Logic for again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
