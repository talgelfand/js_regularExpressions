'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// Search, Match, Test

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i)); // комбинация классов
console.log(str.match(/\D/ig));

// Обратные классы
// \D - не числа
// \W - не буквы

// Классы
// \d - числа
// \w - слова (буквы)
// \s - пробелы

// Флаги
// i
// g
// m

// console.log(ans.search(reg)); // находит первую букву в строке
// console.log(ans.match(reg));

// Replace

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));