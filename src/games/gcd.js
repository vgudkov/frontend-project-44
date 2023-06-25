import readlineSync from 'readline-sync';
import {
  getRandomInRange, getWrongAnswer, showWinner,
} from '../utils.js';

// Welcome & Rules
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Find the greatest common divisor of given numbers.');

// Logic for the greatest common divisor function
const gcdFunction = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;

  while (secondNumber !== 0) {
    const temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
  }
  return firstNumber;
};

// Game logic
export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber1 = getRandomInRange();
    const randomNumber2 = getRandomInRange();
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    const greatestCommonDivision = gcdFunction(randomNumber1, randomNumber2).toString();

    if (playerAnswer === greatestCommonDivision) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, `${playerAnswer}`, `${greatestCommonDivision}`);
    }
  }

  return showWinner(playerName);
};
