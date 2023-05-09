'use strict';
/*
console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.score').textContent = 10;
document.querySelector('.message').textContent = 'mession failed';
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Too high';
    } else {
      document.querySelector('.message').textContent = '🧨 You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too low';
    } else {
      document.querySelector('.message').textContent = '🧨 You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  console.log(score);
});
