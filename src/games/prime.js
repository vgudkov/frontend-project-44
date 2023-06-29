import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Logic for the prime function
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

const generateRound = () => {
  const num = getRandomInRange();
  const question = `Question: ${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
