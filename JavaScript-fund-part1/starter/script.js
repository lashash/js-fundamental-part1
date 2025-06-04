/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Lasha");
console.log(23);

let firstName = "Lasha";
console.log(firstName); 


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Lsha");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1987;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1987;
// birthYear = 1988;

// const job;


var job = "programmer";
job = "teacher";

lastName = "Shangua";
console.log(lastName);


//ეს არის მინიჭების ოპერატორი
const now = 2037;
const ageLasha = now - 1987;
const ageTsotne = now - 2013;
console.log(ageLasha, ageTsotne);

console.log(ageLasha * 2, ageLasha / 10, 2 ** 3);
//2**3 ნიშნავს 2 ის 3-ე ხარისხი 3=2*2*2

const firstName = "Lasha";
const lastName = "Shangua";
console.log(firstName + " " + lastName);

//ეს არის მათემატიკური ოპერატორები
let x = 10 + 5; //15
x += 10; //x=x+10 -> 25
x *= 4; //x=x*4 -> 100
x++; //x=x+1 - > 101
x--; //x=x-1 -> 100
x--;
console.log(x);

//შედარების ოპერატორები
console.log(ageLasha > ageTsotne); // >, < , >=, <=
console.log(ageTsotne >= 18);

const isFullAge = ageTsotne >= 18;


const now = 2037;
const ageLasha = now - 1987;
const ageTsotne = now - 2013;

console.log(now - 1987 > now - 2013);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const avarageAge = (ageLasha + ageTsotne) / 2;
console.log(ageLasha, ageTsotne, avarageAge);
*/
//CHALLENGE1
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = (massMark / heightMark) * heightMark;
const BMIJohn = (massJohn / heightJohn) * heightJohn;
console.log(BMIMark, BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
