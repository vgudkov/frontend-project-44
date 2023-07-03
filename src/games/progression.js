import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionMember = getRandomInRange();
  const progressionStep = getRandomInRange(1, 10);
  const progressionLength = 10;
  let progression = makeProgression(progressionMember, progressionStep, progressionLength);
  const hiddenIndex = getRandomInRange(0, (progressionLength - 1));

  const hiddenMember = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  progression = progression.join(' ');

  const question = `${progression}`;
  const answer = String(hiddenMember);

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
