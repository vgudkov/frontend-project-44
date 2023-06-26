import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

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

const generateRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `Question: ${num1} ${num2}`;
  const answer = String(gcdFunction(num1, num2));

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
