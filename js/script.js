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
