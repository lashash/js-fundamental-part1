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


const firstName = "Lasha";
const job = "Teacher";
const birthYear = 1987;
const year = 2037;

const lasha =
  "I'm " + firstName + ", a " + (year - birthYear) + " yaers old " + job + " !";
console.log(lasha);

const lashaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(lashaNew);
console.log(`Just a regular string...`);

console.log(
  "string with \n\
    multiple \n\
    lines"
);

console.log(`sting 
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log(`Lasha can strat driver's license `);
} else {
  const yearsLeft = 18 - age;
  console.log(`Lasha is too young. Wait another ${yearsLeft} years!`);
}

const birthYear = 2021;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = (massMark / heightMark) * heightMark;
const BMIJohn = (massJohn / heightJohn) * heightJohn;
console.log(BMIMark, BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//type conversion
const inputYer = "1987";
console.log(Number(inputYer), inputYer);
console.log(Number(inputYer) + 18);

console.log(Number("Lasha"));

console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " yaers old");
console.log("23" + "10" + 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


//fales values: 0," ", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Lasha"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is definet");
} else {
  console.log("Height in UNDEFINED");
}
*/

const age = 18;
if (age === 18) {
  console.log("You just become an adult :D");
}
