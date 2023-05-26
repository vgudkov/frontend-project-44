// Функция, генерирующая случайное число от 0 до 100
const getRandomNumber = () => Math.floor(Math.random() * 101);

// Функция, проверяющая чётность числа
const isEven = (number) => number % 2 === 0;

// Функция, которая выводит текст при неправильном ответе
const getWrongAnswer = (playerName) => console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${playerName}!`);

// Функция, которая выводит текст при правильном ответе
const getCorrectAnswer = (playerName) => console.log(`Congratulations, ${playerName}!`);

export {
  getRandomNumber, isEven, getWrongAnswer, getCorrectAnswer,
};
