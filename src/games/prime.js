import readlineSync from 'readline-sync';
import {
  getRandomInRange, getWrongAnswer, showWinner,
} from '../utils.js';

// Приветствие игрока & правила игры
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// Функция, которая определяет, является ли число простым
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

// Логика игры
export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomInRange();
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === 'yes' && isPrime(randomNumber)) {
      console.log('Correct!');
    } else if (playerAnswer === 'no' && !isPrime(randomNumber)) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, 'yes', 'no');
    }
  }

  return showWinner(playerName);
};
