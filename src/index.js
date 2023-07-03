import readlineSync from 'readline-sync';
import { getWrongAnswer } from './utils.js';

const roundsCount = 3;

export default (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(`${rules}`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return getWrongAnswer(playerName, playerAnswer, correctAnswer);
    }
  }

  return console.log(`Congratulations, ${playerName}!`);
};
