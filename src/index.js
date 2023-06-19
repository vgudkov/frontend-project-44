import readlineSync from 'readline-sync';
import { getWrongAnswer, showWinner } from './utils.js';

const runEngine = (rules, makeRound) => {
  // Приветствие игрока
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  // Показываем правила
  console.log(`${rules}`);

  // Создаем цикл для прохождения раундов
  const roundsCount = 3;
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
  // Сообщение о победе
  return showWinner(playerName);
};
