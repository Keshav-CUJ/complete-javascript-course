console.log("Keshav making changes");

/*Variable naming


// let 3year = 3; //wrong
let $year = 3;
let _year = 3;
let Year = 3; //Not syntax error but we use it for objects.
let PI = 3.14; //Used for universal constants, dont use let in this case.
// let year&day = 4; //wrong
let year3 =3;

console.log(year3);  

*/

/* 
console.log("Assignment on values and variables");

let country = "India";
let continent = "Asia";
let population = 1500;

console.log(country, continent, population);

console.log("Assignment for data-types");

let isIsland = false;
let language;

console.log(typeof country,typeof continent,typeof population, typeof isIsland, typeof language, typeof null);

*/


console.log("Assignment for let, const, var");

//var --never use this
// const -- prefer to use always
// let -- when needed too much

let language;
language = "Hindi"; 
const country= "India" ;
const continent ="Asia";
let population = 1500;
const isIsland= false;

// isIsland = true; //error



console.log("Basic operators");

console.log("people in each half", population/2 );

population++;
console.log(population);
console.log(population>6);
console.log(population<33);

const discription = country + " is in "+ continent+", and it's "+ population+ " million people speak "+ language;

console.log(discription);

population = 13;
console.log(discription);  //const value does not change because it does not evaluated again.

console.log("Assignment of string literals");

const newDiscription = `${country} is in ${continent} and it's ${population} million people speak ${language}.`

console.log(newDiscription);

console.log(`My name is Keshav
and i am 
writing a multiline 
comment.`)

console.log("Assignment for conditional statements")

if(population > 33) console.log(`${country}'s population is above average.`);
else console.log(`${country}'s population is ${33 - population} million below the average population.`)

console.log("Assignment on Type conversion and coercion");

console.log('9'-'5');
console.log('19'-'13' + '17');
console.log('19'- '13' + 17); // after minus operation type is number not string.
console.log(typeof ('19' - '17'));
console.log(NaN + 2);
console.log('123' < 57);
console.log('bhatt' < '57'); // bhatt converted to NaN
console.log(NaN < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2)
console.log(NaN >= NaN);

console.log("\n \n \n \n Assignment on === and ==");

console.log(NaN === NaN);

const numNeighbours = Number(prompt("How many neighbours countries does your country have? "));

if(numNeighbours === 1) console.log("Only one neighbour");
else if(numNeighbours>1) console.log("More than 1 neighbour.")
else console.log("No borders");