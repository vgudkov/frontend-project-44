import readlineSync from 'readline-sync';
import {
  getRandomNumber, gcdFunction, getWrongAnswer, showWinner,
} from '../src/add_functions.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${playerName}!`);
console.log('Find the greatest common divisor of given numbers.');

export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber1 = getRandomNumber(101);
    const randomNumber2 = getRandomNumber(101);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const gcdAnswer = readlineSync.question('Your answer: ');

    const greatestCommonDivision = gcdFunction(randomNumber1, randomNumber2).toString();

    if (gcdAnswer === greatestCommonDivision) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, `${gcdAnswer}`, `${greatestCommonDivision}`);
    }
  }

  return showWinner(playerName);
};
