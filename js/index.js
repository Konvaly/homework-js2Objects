// Таски на условия
// 1) Делится ли число на 5, или на 3, или на 2 без остатка?
const remainderNumber = Number(prompt('Please, input number: '));
if (
  remainderNumber % 5 === 0 ||
  remainderNumber % 3 === 0 ||
  remainderNumber % 2 === 0
) {
  alert('This number is divisible by 2 or 3 or 5 without remainder.');
} else {
  alert('After dividing by 2 or 3 or 5 there is a remainder');
}

// Таски на циклы (Only FOR)

// 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)

const num = +prompt('Please enter a number: ');
let resFactorial = 1;
for (let i = 1; i <= num; i++) {
  resFactorial *= i;
}
console.log('resFactorial :>> ', resFactorial);

// 2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь
// 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).
const lim1 = +prompt('Please enter a lim1: ');
const lim2 = +prompt('Please enter a lim2: ');

let resultLim = 1;
for (let i = lim1; i <= lim2; i++) {
  resultLim *= i;
}
console.log('resultLim :>> ', resultLim);

// Таски на функции
// 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// Ожидаемый вывод:
// isAdult(20); // true
// isAdult(4); // false

function isAdult (age) {
  return age >= 18;
}

// 1) *Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)
// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:

// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

function checkMultiplicity (a, b) {
  return a % b === 0;
}

// 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
function trianglePossibility (a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

// 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)
// (2 функции на выбор реализовать в формате функционального выражения)

// S = 0,5 * a * h, где a — основание, h — высота
const squareTriangle = function (a, h) {
  return 0.5 * (a * h);
};

// a, b - стороны прямоугольника
function squareRectangle (a, b) {
  return a * b;
}

// S = π r(r + l), где S - площадь, R - радиус основания конуса, l - образующая конуса,
//  π = 3.141592.
function surfaceAreaCone (r, l) {
  return 3.141592 * r * (r + l);
}

// S = 2(a · b + a · h + b · h), где S - площадь прямоугольного параллелепипеда, a - длина, b - ширина, h - высота.
const surfaceAreaParal = function (a, b, h) {
  return 2 * (a * b + a * h + b * h);
};

// Таски на объекты
// 1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.
const student = {
  name: 'Lena',
  surname: 'Roy',
  isFemale: true,
  phoneNumber: '0670001122',
  showAddress: function () {
    console.log('Kiev, Teligy street, 8-12');
  },
  changeGender () {
    this.isFemale = false;
  },
};
console.log('student :>> ', student);

// 2. создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на другой факультет. (можно на свой выбор)
const dragon = {
  name: 'Toothless',
  kind: 'Night fury',
  color: 'black',
  wingspan: 4,
  lengthDragon: 2,
  isChild: true,
  flying () {
    console.log('He can fly!');
  },
  dragonSize () {
    return this.wingspan / this.lengthDragon;
  },
};
console.log('dragon :>> ', dragon);
alert(dragon.dragonSize());

// 3 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
function Book (author, bookName, yearPublication, publisher) {
  this.author = author;
  this.bookName = bookName;
  this.yearPublication = yearPublication;
  this.publisher = publisher;
}

const book1 = new Book('J. R. R. Tolkien', 'Hobbit', '1985', 'Veselka');
const book2 = new Book(
  'L. Gonick',
  'The history of the universe',
  '2017',
  'Ridna mova'
);

// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
function ElectronicBook (
  author,
  bookName,
  yearPublication,
  publisher,
  format,
  elNumber
) {
  this.author = author;
  this.bookName = bookName;
  this.yearPublication = yearPublication;
  this.publisher = publisher;
  this.format = format;
  this.elNumber = elNumber;
}

const eBook1 = new ElectronicBook(
  'R. Riordan',
  'The heroes of Olimpus',
  '2019',
  'Ranok',
  'epub',
  '434637'
);
const ebook2 = new ElectronicBook(
  'R. Dal',
  'Matilda',
  '2017',
  'VSL',
  'mobi',
  '383697'
);
