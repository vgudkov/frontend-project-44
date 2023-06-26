import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'What number is missing in the progression?';

const makeProgression = () => {
  let progression = [];
  let progressionMember = getRandomInRange();
  const progressionDiff = getRandomInRange(0, 10);
  const hiddenIndex = Math.floor(Math.random() * 10);
  let hiddenMember;

  for (let i = 0; i <= 10; i += 1) {
    if (i === hiddenIndex) {
      hiddenMember = progressionMember;
      progression.push('..');
      progressionMember += progressionDiff;
    } else {
      progression.push(progressionMember);
      progressionMember += progressionDiff;
    }
  }
  progression = progression.join(' ');
  return [progression, hiddenMember];
};

const generateRound = () => {
  const [progression, hiddenNumber] = makeProgression();

  const question = `Question: ${progression}`;
  const answer = String(hiddenNumber);

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
