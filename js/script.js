const name = "Piotr";
const petName = "Hologram";
let petAge = 3;

console.log(
	`Cześć, jestem ${name}, a to mój pies ${petName}, który ma już ${petAge} lata.`
);

console.log(`text, "a to cudzysłów"`);

const msg = "jakaś tam wiadomość";

console.log(msg.toUpperCase());

const userName = "piotr";

const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);

console.log(userName.slice(1));

console.log(newUserName);

const text1 = "powiększ mnie";

console.log(text1.toUpperCase());

const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";

console.log(text2.toLowerCase());

const text3 = "##$%^ wytnij te dziwne znaki na początku";

console.log(text3.slice(6));

const text4 = 'sprawdź czy zawietam słowo "czy"';

console.log(text4.includes("czy"));

const text5 =
	'wyLoguj w konsoli tylko literę "L", która znajduję się w wyrazie "Wyloguj';

const text6 = "pies zamień każde słowo pies, kot pies";

console.log(text6.replaceAll("pies", "kot"));

const text7 = "podziel, ten, string, od, przecinków";

console.log("%cCześć!", "font-size: 30px; color:gold; text-transform:uppercase;");
