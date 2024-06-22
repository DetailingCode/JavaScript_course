// const colors = ["red", "green", "blue"];

// console.log(colors);

// function test() {
// 	console.log("Funkcja!");
// }

// test();

// const person = {
// 	name: "imie",
// 	age: 33,
// 	favColor: "red",
// };

// console.log(person);

// ==== OPERATORY ARYTMETYCZNE ====

/*
let x = 5;
const y = 6;

const add = x + y;
console.log(add);

const substract = x - y;
console.log(substract);

const multiply = x * y;
console.log(multiply);

const divide = x / y;
console.log(divide);

x++;

console.log(`Inkrementacja zwiększa x o 1: ${x}`);

x--

console.log(`Dekrementacja zmniejsza x o 1: ${x}`);

const modulo = 10%4
console.log(modulo);
*/

// ==== OPERATORY PRZYPISANIA ====
/*
let x = 10;
let y = 5;
console.log(x);

x += y;
console.log(x);

x -= y;
console.log(x);

x *= y;
console.log(x);

x /= y;
console.log(x);

x %= y;
console.log(x);
*/

// ==== OPERATORY PORÓWNANIA ====
/*
console.log(10 == '10');
console.log(10 === '10');
console.log('10' === '10');

console.log(10 != '10');
console.log(10 !== '10');
console.log('10' !== '10');
*/

// ===== IF / ELSE IF/ ELSE =====
/*
const pass = "2u+454!54545#f#";

if (pass.length > 10 && pass.includes('!')) {
	console.log("Masz bardzo dobre hasło");
} else if (pass.length > 10) {
	console.log("Masz dobre hasło");
} else {
	console.log('Masz za krótkie hasło');
}

*/

// SWITCH ============
/*
const day = "sobota";

switch (day) {
	case "poniedziałek":
		console.log("dziś jest poniedziałek");
		break;
	case "wtorek":
		console.log("dziś jest wtorek");
		break;
	case "środa":
		console.log("dziś jest środa");
		break;
	case "czwartek":
		console.log("dziś jest czwartek");
		break;
	case "piątek":
		console.log("dziś jest piątek");
		break;
	default:
		console.log("Weekend :)");
}
*/

// ===== OPERATORY WARUNKOWE

// const x = 10;
// if (x > 20) {
// 	console.log(`${x} > 20`);
// } else {
// 	console.log(`${x} < 20`);
// }

// const newX = x > 20 ? `${x} > 20` : `${x} < 20`;

// console.log(newX);

// IF ZADANIA ===========

// const x = 50
// const y = 30

// if (x > y){
//     console.log(`${x} jest większe, niż ${y}`);
// } else {
//     console.log(`${x} jest mniejsze, niż ${y}`);
// }

// const color = "blue";
// const newColor = "green";

// if (color === newColor) {
// 	console.log("kolory się zgadzają");
// } else {
// 	console.log("kolory się nie zgadzają");
// }

// const x = 100;
// const y = 100;

// if (x > y) {
// 	console.log('x>y');
// } else if (x === y) {
// 	console.log('x=y');
// } else {
// 	console.log('x<y');
// }

// ======== ZADANIE 3

// const x = 10;

// const check = (x % 2 === 0) ? "X jest parzyste" : "X jest nieparzyste";
// console.log(check);

// ========== ZADANIE 4

// const x = 114;
// let text;
// if (x >= 100) {
// 	text = "x >= 100";
// } else if (x < 100 && x > 30) {
// 	text = "x jest średniakiem";
// } else {
// 	text = "x jest mały";
// }

// console.log(text.toUpperCase());

// const animals = ["dog", "cat", "horse", "pig", "bat","ant",'cow'];

// for (let i = 0; i < animals.length; i++) {
// 	console.log(animals[i]);
// }

// const colors = ['red','blue','green','grey','pink','yellow'];

// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// ========= PETLA FOR =============

// const colors = [
// 	"red",
// 	"blue",
// 	"green",
// 	"grey",
// 	"pink",
// 	"yellow",
// 	"black",
// 	"white",
// ];

// for (let i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }

// ======================================

// ========= PETLA WHILE =============
// let i = 0;

// while (i < 10) {
// 	console.log(i);
// 	i++;
// }

// ======================================

// ========= PETLA DO...WHILE =============

// let i = 0;

// do {
// 	i++;
// 	console.log(i);
// } while (i < 11);

// ========================================

// ========= PETLA FOR OF =============

// const numbers = [1,2,3,4,5,6,7,8]

// for (const number of numbers){
//     console.log(number*2);
// }

// ============= FOR - TASK1

// const cities = ["London", "Paris", "Warsaw", "Berlin", "Madrid", 'New York'];

// for (let i = 0; i < cities.length; i++) {
// 	console.log(`To miasto nazywa się: ${cities[i]}`);

// }

// ==========================================
//  |
// ============= WHILE - TASK2          //  |
//  |
// let x = 0;                           //  |
// while ((x<10)) {
// 	x+=2
//     console.log(x);
// }

// ========================================

// ============= DO...WHILE - TASK3

// let x = 20;
// do {
//     x -= 3;
// } while (x > 0);
// console.log(x);

// ========================================

// ============= FOR OF - TASK4

// const numbers = [5, 8, 10, 23, 48, 60];

// for (const number of numbers){
//     console.log(number / 5);

// }

// // ============= FOR OF - TASK4

// for(const number of numbers){
//     if(number % 2 === 0){
//         console.log(`%cLiczba ${number} jest parzysta`,'background-color:orangered; color:black');
//     }else{
//         console.log(`%cLiczba ${number} jest nieparzysta`,'background-color:gold; color:black');
//     }
// }

// ========================================

// ===== SHIFT, UNSHIFT, POP, PUSH - FUNCTION

// const numbers = []
// // dodaje zmienna na początku tablicy
// numbers.unshift(1,2,3,4,5)
// console.log(numbers);
// // dodaje zmienna na końcu tablicy
// numbers.push(6,7,8,9)
// console.log(numbers);
// // usuwa zmienna - pierwszy element tablicy, w nawiasach nie wpisujemy nic
// numbers.shift()
// console.log(numbers);
// // usuwa ostatnia zmienna z tallicy
// numbers.pop(11)
// console.log(numbers);

// ========================================

// ===== MAP, CONCAT, SPREAD, REST OPERATOR

// const numbers = [1, 2, 3, 4, 5];
// const abc = ["a", "b", "c"];

// const newArray = numbers.concat(abc);

// console.log(newArray);

// function multiply(x) {
// 	return x * 2;
// }

// const newNumbers = numbers.map(multiply)
// console.log(numbers);
// console.log(newNumbers);

// const drinks = ["cola", "pepsi", "orange juice", "sprite"];
// const meals = ["pizza", "spaghetti", "soup", "sandwitch"];

// console.log(...drinks);
// console.log(...meals);
// const menu = [...drinks, ...meals];

// console.log(menu);

// ===================================

// +++++++++++++++TRESC ZADANIA+++++++++++

// Stwórz zmienną numbers2 i za pomocą metody slice, wytnij z tablicy numbers pierwsze dwa zera.

// Następnie stwórz numbers3 i za pomocą metody slice, wytnij trzy ostatnie dwójki z tablicy numbers. Jeśli nie wiesz jak to zrobić, dokumentacja na MDN z pewnością pomoże. 🙂

// Obydwie te zmienne wypisz w konsoli.

// Następnie za pomocą metody splice, wytnij dwa ostanie elementy z tablicy colors.

// Te nowe elementy wsadź do tablicy o nazwie randomStuff. Nowe tablice wyloguj w konsoli.

// Teraz przejdź do tablicy cars. Musisz wyciąć z niej wszystkie samochody i przypisać do tablicy newCars. Skorzystaj oczywiście z metody splice. Podczas wycinania, dodaj napis 'test' do tablicy cars.

// W konsoli wyloguj tablicę cars oraz newCars.

// ============ SLICE, SPLICE

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", true, 123];

// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

// console.log(numbers);

// const numbers2 = numbers.slice(0,2)
// console.log(`numbers2`);
// console.log(numbers2);

// const numbers3 = numbers.slice(4)
// console.log(`numbers3`);
// console.log(numbers3);

// const randomStuff = colors.splice(-2)
// console.log(`colors`);
// console.log(colors);

// console.log(`randomStuff`);
// console.log(randomStuff);

// const newCars = cars.splice(2,4, 'test')
// console.log(cars);
// console.log(newCars);

// ========== FILTER, FOREACH, INCLUDES

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.forEach(number => console.log(number * 2));

// console.log(newNumbers);

// const mapNumbers = numbers.map(number => console.log(number*2));
// console.log(mapNumbers);

// ========== ARRAY - TASK 1 ----------

// const letters = ["c", "d"];

// letters.unshift("a", "b");

// console.log(letters);

// letters.push("e", "f");

// console.log(letters);

// console.log(letters.includes("c"));

// ========== ARRAY - TASK 2 ----------

// const numbers = [1, 2, 3, 4, 5, 6];

// const food = ["pizza", "hamburger", "spaghetti", "sandwitch"];

// const newArray = [...numbers, ...food];

// console.log(newArray);

// ========== ARRAY - TASK 3 ----------

// const numbers = [1,5,13,26,48]

// function multiply (x){
// 	return x * 5

// }
// const newNumbers = numbers.map(multiply)
// console.log(numbers);
// console.log(newNumbers);

// 	for(const number of newNumbers){
// 		if(number % 2 ===0){
// 			console.log(`Liczba ${number} jest parzysta`);
// 		}else{
// 			console.log(`Liczba ${number} jest nieparzysta`);
// 		}
// 	}

// ========== ARRAY - TASK 4 ----------

// const colors = ["red"];

// colors.unshift("blue");
// colors.push("yellow");

// console.log(colors);

// for (let i = 0; i < colors.length; i++) {
// 	console.log(
// 		"mój ulubiony kolor to:",
// 		colors[i].charAt(0).toUpperCase() + colors[i].slice(1)
// 	);
// }

// ========== ARRAY - TASK 5 ----------

// const cars = "Auddi, Mercedes, BMW, Dodge, Kia";

// const carsArray = cars.split(", ");
// console.log(carsArray);

// carsArray.length > 3 ? console.log("Jest OK") : console.log("Nie jest OK");

// if (carsArray.includes("Audi")) {
// 	carsArray.push("Toyota");
// } else {
// 	carsArray.pop();
// }
// console.log(carsArray);

// // ============= FOR OF - TASK4

// for(const number of numbers){
//     if(number % 2 === 0){
//         console.log(`%cLiczba ${number} jest parzysta`,'background-color:orangered; color:black');
//     }else{
//         console.log(`%cLiczba ${number} jest nieparzysta`,'background-color:gold; color:black');
//     }
// }

// ====== FUNCTION ========

// function test(name,age){
// 	console.log(`Cześć mam na imię: ${name} i mam ${age} lata`);
// }

// test('Dominik', 22)
// ==================================================

// ========== FUNKCJA STRZALKOWA =============

// const test2 = (name) => {
// 	console.log(`Mam na imię ${name}`);
// };

// test2("Imię");

// const days = ["monday", "tuesday", "wednesday"];

// const days2 = days.forEach((day) => console.log(day));

// const test3 = name => console.log(name);
// test3('Arek')

// ==================================================

// const hello = (name) => console.log(`Cześć ${name}, jak się masz?`);

// ========== OPERATOR REST =============

// const numbers = (x, y, ...z) => {
// 	console.log(x, y, z);
// 	console.log((z.map(el => el*2)));
// };

// numbers(123, 543, 654, 5643);

// ==================================================

// ========== ZAKRESY =============

// const name = "Lisa";

// const test = () => {
// 	const name = "Lily";
// 	console.log(`NAME w funkcji ${name}`);

// 	const age = 22;
// 	console.log(age);

// 	const test2 = () => {
// 		console.log(`------`);
// 		console.log(name);

// 		const color = "red";
// 		console.log(color);
// 	};
// 	test2();

// 	const test3 = () => {
// 		console.log(color);
// 	};
// 	test3();
// };

// test();
// console.log(`------`);
// console.log(`NAME nie w funkcji ${name}`);
// ==================================================

// ============= FOREACH and CALLBACK -----------------

// const numbers = [0.5, 5, "text"];
// const names = ["Ala", "Lisa", "Jan", "Olek"];

// numbers.forEach((num) => console.log(num * 2));

// const bigNames = names.map(name => name.toUpperCase());
// console.log(bigNames);

// const showBigNames = (name) => {
// 	console.log(name.toUpperCase());
// }
// names.forEach(showBigNames)

// ==================================================

// ======== FUNCTION TASK1 ==========

// let score;

// const add = (x, y) => {
// 	score = x + y;

// 	score % 2 === 0 ? evenNumber() : oddNumber();

// 	// if(score % 2===0){
// 	// 	evenNumber()
// 	// }else {
// 	// 	oddNumber()

// 	// }
// };

// const evenNumber = () => {
// 	console.log(`Liczba ${score} jest parzysta`);
// };

// const oddNumber = () => {
// 	console.log(`Liczba ${score} jest nieparzysta`);
// };

// add(2, 2);
// ==================================================

// ======== FUNCTION TASK1 SECOND WAY (How to do it)==========

// const add = (x, y) => {
// 	const score = x + y;

// 	score % 2 === 0 ? evenNumber(score) : oddNumber(score);
// };

// const evenNumber = (num) => {
// 	console.log(`Liczba ${num} jest parzysta`);
// }

// const oddNumber = (num) => {
// 	console.log(`Funkcja ${num} jest nieparzysta`);
// }

// add(3,3)
// ==================================================

// ======== Conversion Celsiuc to fahrenheit  TASK2 ==========

// let celcius;
// let temp;

// const fahrenheit = (c) => {
// 	celcius = c;
// 	temp = celcius * 1.8 + 32;

// 	console.log(`${celcius} stopni C = ${temp} stopni F`);
// };

// fahrenheit(0);

// let celcius;
// let temp;

// const fahrenheit = (c) => {
// 	celcius = c;
// 	temp = celcius * 1.8 + 32;
// 	console.log(`${celcius} stopni C = ${temp}`);
// };

// fahrenheit(30);

// ==================================================

// ========  TASK3 ==========

// 1. Stworz zmienna num (przypisz wartosc 10) oraz numbers (przypisz pusta tablica)
// 2. Stworzyc petle FormData, gdzie i bedzie mniejsze od num, petla ma dodawac i do talicy number
// 3. Stworz funkcje ktora przyjmie 1 parametr. W funkcji ma byc if, ktory sprawdz czy liczba podana w argumencie jest podzielna przez 3 oraz rozna od zera:
// -- jezeli tak wypisz w koncoli X jest podzielne przez 3
// -- jezeli nie, wypisz x nie jest podzielne przez 3 lub x=0
// 4. Za pomoca forEach odwolaj się do tablicy numbers

// const num = 10;
// const numbers = [];

// for (let i = 0; i < num; i++) {
// 	numbers.push(i);
// }
// console.log(numbers);

// const checkNumbers = (number) => {
// 	if (number % 3 === 0 && number !== 0) {
// 		console.log(`${number} jest podzielne przez 3`);
// 	} else {
// 		console.log(`${number} nie jest podzielne przez 3 lub ${number} = 0`);
// 	}
// };

// numbers.forEach(checkNumbers)

// SELEKTORY ==========

// const className = document.getElementsByClassName('test')
// console.log(className);

// const test = document.querySelectorAll('li')
// console.log(test);

// const ulList = document.querySelector('ul')
// console.log(ulList);

// const liItem = ulList.querySelector('li')
// console.log(liItem);

// ==================================

// const heading = document.querySelector("h1");
// console.log(heading);

// const paragraph = document.querySelectorAll('p')
// console.log(paragraph);

// const divTest = document.querySelector('.test')

// const test = divTest.querySelector("#test")

// console.log(test);

// ======== Dodawanie elementow na stronę


const test = document.getElementById("item")

console.log(test);
// const ulList = document.createElement('ul')
// const liItem = document.createElement('li')

// liItem.textContent = 'cześć'

// document.body.appendChild(ulList)
// ulList.appendChild(liItem)

