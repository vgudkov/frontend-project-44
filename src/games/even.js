import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const number = getRandomInRange();

  const question = `Question: ${number}`;
  const answer = isEven(number);

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
