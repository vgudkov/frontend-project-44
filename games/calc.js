import readlineSync from 'readline-sync';
import {
  getRandomNumber, getWrongAnswer, showWinner,
} from '../src/add_functions.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${playerName}!`);
console.log('What is the result of the expression?');

export default () => {
  const mathOperations = ['+', '-', '*'];

  for (let i = 0; i <= 2; i += 1) {
    const firstNumber = getRandomNumber(101);
    const secondNumber = getRandomNumber(101);
    const operationSign = mathOperations[getRandomNumber(3)];

    console.log(`Question: ${firstNumber} ${operationSign} ${secondNumber}`);
    const resultAnswer = readlineSync.question('Your answer: ');

    let additionResult;
    let substractionResult;
    let multiplicationResult;
    const trueResult = [];

    switch (operationSign) {
      case '+':
        additionResult = firstNumber + secondNumber;
        additionResult = additionResult.toString();
        trueResult.push(additionResult);
        break;
      case '-':
        substractionResult = firstNumber - secondNumber;
        substractionResult = substractionResult.toString();
        trueResult.push(substractionResult);
        break;
      case '*':
        multiplicationResult = firstNumber * secondNumber;
        multiplicationResult = multiplicationResult.toString();
        trueResult.push(multiplicationResult);
        break;
      default:
        break;
    }

    if (resultAnswer === additionResult) {
      console.log('Correct!');
    } else if (resultAnswer === substractionResult) {
      console.log('Correct!');
    } else if (resultAnswer === multiplicationResult) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, resultAnswer, trueResult[trueResult.length - 1]);
    }
  }

  return showWinner(playerName);
};
