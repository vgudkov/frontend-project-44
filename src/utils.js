// Function which generates random number in a range
const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

// Function which shows wrong answer's message
const getWrongAnswer = (playerName, wrongAnswer, correctAnswer) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);

export { getRandomInRange, getWrongAnswer };
