import readlineSync from 'readline-sync';
import { getWrongAnswer, showWinner } from './utils.js';

// Constant for the rounds number
const roundsCount = 3;

const runEngine = (rules, makeRound) => {
  // Player greeting
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  // Show the rules
  console.log(`${rules}`);

  // Create a cycle for 1 round
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
  // Victory message
  return showWinner(playerName);
};
