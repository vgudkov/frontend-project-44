import readlineSync from 'readline-sync';
import {
  getRandomInRange, getWrongAnswer, showWinner,
} from '../utils.js';

// Приветствие игрока & правила игры
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Функция, проверяющая чётность числа
const isEven = (number) => number % 2 === 0;

// Логика игры
export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomInRange();
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === 'yes' && isEven(randomNumber)) {
      console.log('Correct!');
    } else if (playerAnswer === 'no' && !isEven(randomNumber)) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, 'yes', 'no');
    }
  }

  return showWinner(playerName);
};
