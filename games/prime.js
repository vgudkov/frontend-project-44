import readlineSync from 'readline-sync';
import {
  getRandomNumber, isPrime, getWrongAnswer, showWinner,
} from '../src/add_functions.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hi, ${playerName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomNumber(101);
    console.log(`Question: ${randomNumber}`);
    const primeAnswer = readlineSync.question('Your answer: ');

    if (primeAnswer === 'yes' && isPrime(randomNumber)) {
      console.log('Correct!');
    } else if (primeAnswer === 'no' && !isPrime(randomNumber)) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, 'yes', 'no');
    }
  }

  return showWinner(playerName);
};
