// Функция, генерирующая случайное число в заданном диапазоне
export default (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));
