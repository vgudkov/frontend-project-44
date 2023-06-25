import readlineSync from 'readline-sync';
import {
  getRandomInRange, getWrongAnswer, showWinner,
} from '../utils.js';

// Welcome & Rules
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('What number is missing in the progression?');

// Game logic
export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const progressionMassive = [];
    const progressionDiff = 10 - getRandomInRange(0, 10);
    let progressionMember = getRandomInRange();

    for (let j = 0; j < 10; j += 1) {
      progressionMassive.push(progressionMember);
      progressionMember += progressionDiff;
    }

    const randomHiddenMember = getRandomInRange(0, 10);
    let trueProgressionMember = progressionMassive[randomHiddenMember];
    trueProgressionMember = trueProgressionMember.toString();
    progressionMassive[randomHiddenMember] = '..';

    const progressionRow = progressionMassive.join(' ');

    console.log(`Question: ${progressionRow}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === trueProgressionMember) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, playerAnswer, trueProgressionMember);
    }
  }

  return showWinner(playerName);
};
