const colors = ["red", "green", "blue"];

console.log(colors);

function test() {
	console.log("Funkcja!");
}

test();

const person = {
	name: "imie",
	age: 33,
	favColor: "red",
};

console.log(person);

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

const x = 150

if (x >= 100){
    console.log('%cx > 100', 'test-transfor:uppercase');
} else if (x < 100 && x > 30){
    console.log('%cx jest średniakiem', 'text-transform:uppercase');
}



