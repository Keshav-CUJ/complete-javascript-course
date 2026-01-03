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

population = 155;
console.log(discription);  //const value does not change because it does not evaluated again.