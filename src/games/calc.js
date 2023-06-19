import readlineSync from 'readline-sync';
import { getRandomInRange, getWrongAnswer, showWinner } from '../utils.js';

// Приветствие игрока & правила игры
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What is the result of the expression?');

// Логика игры
export default () => {
  const mathOperations = ['+', '-', '*'];

  for (let i = 0; i <= 2; i += 1) {
    const firstNumber = getRandomInRange();
    const secondNumber = getRandomInRange();
    const operationSign = mathOperations[getRandomInRange(0, 2)];

    console.log(`Question: ${firstNumber} ${operationSign} ${secondNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');

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

    if (playerAnswer === additionResult) {
      console.log('Correct!');
    } else if (playerAnswer === substractionResult) {
      console.log('Correct!');
    } else if (playerAnswer === multiplicationResult) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, playerAnswer, trueResult[trueResult.length - 1]);
    }
  }

  return showWinner(playerName);
};
