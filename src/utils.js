// Функция, генерирующая случайное число в заданном диапазоне
const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

// Функция, которая выводит текст при неправильном ответе
const getWrongAnswer = (playerName, wrongAnswer, correctAnswer) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);

// Функция, которая выводит текст при победе
const showWinner = (playerName) => console.log(`Congratulations, ${playerName}!`);

export { getRandomInRange, getWrongAnswer, showWinner };
