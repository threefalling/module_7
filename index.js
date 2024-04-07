//задание 6.10.1
const number = +prompt ('Введите число');

alert (`Введенное число: ${number}
Квадрат числа: ${number ** 2}
Куб числа: ${number ** 3}`);


//задание 6.10.2
const promo = prompt('Введите промокод');
promo.toLowerCase();
if(promo === 'скидка') {
    alert('Промокод применен');
} else {
    alert('Промокод не работает');
}


//задание 6.10.3
const currentYear = 2024;
const userName = prompt('Введите ваше имя');
const userYearOfBirth = prompt('Введите ваш год рождения');
let userAge = currentYear - userYearOfBirth;
alert(`${userName}: ${userAge}`);


//задание 6.10.4
const currentYear = 2024;
const userName = prompt('Введите ваше имя');
const userYearOfBirth = prompt('Введите ваш год рождения');
const userAge = currentYear - userYearOfBirth;
let userAgeEnd = '';
if(userAge % 10 == 1) {
  userAgeEnd = 'год';
} else if(userAge % 10 <5) {
  userAgeEnd = 'года';
} else {
  userAgeEnd = 'лет';
}
alert(`${userName}: ${userAge} ${userAgeEnd}`);


//задание 6.10.5
const userAge = +prompt('Введите ваш возраст');
let sum = '';
if (isNaN(userAge)) {
  alert('Введите число');
} else  if(userAge < 18) {
    alert('Мы не можем выдать вам кредит');
} else if(userAge <= 21) {
    sum = +prompt('Мы можем выдать вам максимум 50000.\nВведите сумму, кратную 1000');
} else if(userAge <= 35) {
    sum = +prompt('Мы можем выдать вам максимум 400000.\nВведите сумму, кратную 1000');
} else if(userAge <= 65) {
    sum = +prompt('Мы можем выдать вам максимум 1000000.\nВведите сумму, кратную 1000');
}
if (!isNaN(sum)) {
  alert(`Мы можем выдать вам ${sum - sum % 1000}`);
}


//задание 7.6.1
let word = 'довод';
word = word.toLowerCase();
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}
if (word === reversedWord) {
  console.log(`Слово ${word} является палиндромом`);
} else {
  console.log(`Слово ${word} не является палиндромом`);
}


//задание 7.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
const set = new Set();
for(let elem of arr) {
  set.add(elem);
}
const newArr = Array.from(set);
console.log(newArr)


//задание 7.6.3
const number = +prompt('Введите число');
const numbersArray = [];
for(let i = 0; i <= number; i += 1) {
  numbersArray.push(i);
}
console.log(numbersArray)


//задание 7.6.4
const board = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];
for (let row = 0; row < board.length; row += 1) {
    let rowStr = "";
    for (let col = 0; col < board[row].length; col += 1) {
        rowStr += board[row][col];
        if (col < board[row].length - 1) {
            rowStr += " ";
        }
    }
    console.log(rowStr);
}


//задание 7.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        const array = obj[key];
          for (let i = 0; i < array.length; i += 1) {
              arrValues.push(array[i]);
          }
    } else {
        arrValues.push(obj[key]);
      }
  }

console.log(arrValues);