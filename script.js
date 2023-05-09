'use strict';
/*
console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.score').textContent = 10;
document.querySelector('.message').textContent = 'mession failed';
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
// const initialNumber = secretNumber;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    // when user wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🏆 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // when the number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Too high';
    } else {
      document.querySelector('.message').textContent = '🧨 You lose the game';
      document.querySelector('.score').textContent = 0;
    }
    // when the number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too low';
    } else {
      document.querySelector('.message').textContent = '🧨 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  console.log(score);
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
