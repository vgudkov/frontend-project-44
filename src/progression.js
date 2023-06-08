import readlineSync from 'readline-sync';
import {
  getRandomNumber, getWrongAnswer, showWinner,
} from './add_functions.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hi, ${playerName}!`);
console.log('What number is missing in the progression?');

export default () => {
  for (let i = 0; i <= 2; i += 1) {
    const progressionMassive = [];
    const progressionDiff = 10 - getRandomNumber(10);
    let progressionMember = getRandomNumber(101);

    for (let j = 0; j < 10; j += 1) {
      progressionMassive.push(progressionMember);
      progressionMember += progressionDiff;
    }

    const randomHiddenMember = getRandomNumber(11);
    const trueProgressionMember = progressionMassive[randomHiddenMember].toString();
    progressionMassive[randomHiddenMember] = '..';

    const progressionRow = progressionMassive.join(' ');

    console.log(`Question: ${progressionRow}`);
    const progressionAnswer = readlineSync.question('Your answer: ');

    if (progressionAnswer === trueProgressionMember) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, progressionAnswer, trueProgressionMember);
    }
  }

  return showWinner(playerName);
};
