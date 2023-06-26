import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Logic for the prime function
const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const generateRound = () => {
  const num = getRandomInRange();
  const question = `Question: ${num}`;
  const answer = isPrime(num);

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
