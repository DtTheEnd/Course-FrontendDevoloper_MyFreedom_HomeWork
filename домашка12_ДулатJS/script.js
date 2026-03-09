const a = '_______________________________';
// Practice 
// Переменные
console.log('PRACTICE - Переменные');
const myName = 'Dulat';
let myAge = 21;
const myFavColor = 'blue';
console.log(myName);
console.log(myAge);
console.log(myFavColor);
myAge = 22;
console.log(myAge);
console.log(a);

// Типы данных'
console.log('PRACTICE - Типы данных');
let myAge2 = 21;
let myName2 = 'Dulat';
let AmIStudent = true;
console.log(myAge2, typeof myAge2);
console.log(myName2, typeof myName2);
console.log(AmIStudent, typeof AmIStudent);

console.log('My name is ' + myName2 + ' and I am ' + myAge2 + ' years old. Am I a student? ' + AmIStudent);
//or
console.log(`My name is ${myName2} and I am ${myAge2} years old. Am I a student? ${AmIStudent}`);
console.log(a);

// Первая программа: Hello, World!
console.log('PRACTICE - Первая программа: Hello, World!');
const userName = prompt('Как вас зовут?', 'Гость');
const favFilm = prompt('Какой ваш любимый фильм?', 'Гарри Поттер');
const favFood = prompt('Какое ваше любимое блюдо?', 'Пицца');

console.log('Имя пользователя:', userName);
console.log('Любимый фильм пользователя:', favFilm);
console.log('Любимое блюдо пользователя:', favFood);

const greeting = `Привет, ${userName}! Тебе нравиться фильм под названием "${favFilm}", и твоё любимое блюдо это ${favFood}.`;

alert(greeting);
console.log(a);

// HOMEWORK1
console.log('HOMEWORK1');
const firstName = prompt('Введите ваше имя', 'Гость');
const lastName = prompt('Введите вашу фамилию', 'Пользователь');
const age = prompt('Введите ваш возраст', '18');
const city = prompt('Введите ваш город', 'Нур-Султан');
const profession = prompt('Введите вашу профессию', 'Студент');

console.log('Имя:', firstName);
console.log('Фамилия:', lastName);
console.log('Возраст:', age);
console.log('Город:', city);
console.log('Профессия:', profession);

const userInfo = `Привет, ${firstName} ${lastName}! Тебе ${age} лет, ты живешь в городе ${city} и работаешь ${profession}.`;

alert(userInfo);
console.log(a);

// HOMEWORK2
console.log('HOMEWORK2');
const numFif = 50;
console.log('Значение:', numFif);
console.log('Тип:', typeof numFif);

const strFif = String(numFif);
console.log('После преобразования в строку:', strFif);
console.log('Тип:', typeof strFif);
console.log(a);

const strOne = '1';
console.log('Значение:', strOne);
console.log('Тип:', typeof strOne);

const numOne = Number(strOne);
console.log('После преобразования в число:', numOne);
console.log('Тип:', typeof numOne);
console.log(a);

const booleanTrue = true
console.log('Значение:', booleanTrue);
console.log('Тип:', typeof booleanTrue);
console.log(a);

const undefinedConst = undefined;
console.log('Значение:', undefinedConst);
console.log('Тип:', typeof undefinedConst);
//or 
let undefinedConst2
console.log('Ничего не записывая в новую переменную, она будет иметь значение:', typeof undefinedConst2);
console.log(a);

const nullConst = null;
console.log('Значение:', nullConst);
console.log('Тип:', typeof nullConst);
console.log(a);