// Функция, генерирующая случайное число от 0 до заданного предела
const getRandomNumber = (base = 101) => Math.floor(Math.random() * base);

// Функция, проверяющая чётность числа
const isEven = (number) => number % 2 === 0;

// Функция, которая выводит текст при неправильном ответе
const getWrongAnswer = (playerName, wrongAnswer, correctAnswer) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);

// Функция, которая выводит текст при победе
const showWinner = (playerName) => console.log(`Congratulations, ${playerName}!`);

export {
  getRandomNumber, isEven, getWrongAnswer, showWinner,
};
