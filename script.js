'use strict';
let randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = randomNumber();

let score = 20;
let highScore = 0;
console.log(secretNumber);
let displatMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let countScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no number
  if (!guess) {
    displatMessage('⛔ No Number');
    // when user wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displatMessage('🏆 Correct number');
    // document.querySelector('.message').textContent = '🏆 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the number is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      countScore(score);
      displatMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      // document.querySelector('.message').textContent = '📈 Too high';
    } else {
      document.querySelector('.message').textContent = '🧨 You lose the game';
      countScore(0);
    }
  }

  console.log(score);
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  document.querySelector('.message').textContent = 'Start guessing...';
  countScore(20);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
