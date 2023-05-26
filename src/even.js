import readlineSync from 'readline-sync';
import {
  getRandomNumber, isEven, getWrongAnswer, getCorrectAnswer,
} from './add_functions.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hi, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const evenAnswer = readlineSync.question('Your answer: ');

    if (evenAnswer === 'yes' && isEven(randomNumber)) {
      console.log('Correct!');
    } else if (evenAnswer === 'no' && !isEven(randomNumber)) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName);
    }
  }

  return getCorrectAnswer(playerName);
};
