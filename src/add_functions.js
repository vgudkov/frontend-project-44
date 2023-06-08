// Функция, генерирующая случайное число от 0 до заданного предела
const getRandomNumber = (base = 101) => Math.floor(Math.random() * base);

// Функция, проверяющая чётность числа
const isEven = (number) => number % 2 === 0;

// Функция, которая выводит текст при неправильном ответе
const getWrongAnswer = (playerName, wrongAnswer, correctAnswer) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);

// Функция, которая выводит текст при победе
const showWinner = (playerName) => console.log(`Congratulations, ${playerName}!`);

// Функция, которая вычисляет наибольший общий делитель 2-х чисел
const gcdFunction = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;

  while (secondNumber !== 0) {
    const temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
  }
  return firstNumber;
};

// Функция, которая определяет, является ли число простым
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

export {
  getRandomNumber, isEven, getWrongAnswer, showWinner, gcdFunction, isPrime,
};
