//stirct mode js
/*'use strict';
let hasDriverLicense = false;

const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive :D');

const n = 023;
// const interface = 'Audio';

// const private = 435;

// const if = 23;
*/



//functions
/*

function logger(){
    console.log('My name is Jonas');
}
//calling /running / innnovating function

logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
} 

// fruitProcessor(5,0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/


//  function declaration vs expressions
/*function calcAge(birthYear){
 return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/


//Arrow function
/*const calcAge3 = birthYear => 2030 - birthYear;
const  age3 = calcAge3(2003);
console.log(age3);

const yearsUnitilRetirement = (birthYear, firstName)=> {
    const age  = 2030 - birthYear;
    const retirement = 30 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
// yearsUnitilRetirement(2003);

console.log(yearsUnitilRetirement(2003, 'Deshraj'));
console.log(yearsUnitilRetirement(2003,'bob'));
*/


// function calling

/*function cutFruitPieces(fruit){
    return fruit * 3;
}

const  fruitProcessor = function(apples, oranges){
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} apples and ${orangesPieces} pieces of orange`;
    return juice;
};
console.log(fruitProcessor(2,3));
*/

//reviewing function
/*const  calcAge = function(birthYear){
    return 2037 - birthYear;
   }
   
const yearsUnitilRetirement = function (birthYear, firstName){
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    if(retirement > 0){
     return retirement
     console.log(`${firstName} retires in  $(retirement) retired 🎉`)
    }else{
        return-1;
    }
   // return `${firstName} retires in ${yearsUnitilRetirement} years`;

}

console.log(yearsUnitilRetirement(1991, 'jonas'));
console.log(yearsUnitilRetirement(1950, 'Mike'));
*/

// Introduction to arrays

/*const freind1 = 'Michael';
const freind2 = 'Steven';
const freind3 = 'Peter';

const freinds = ['Michael', 'Steven' , 'Peter'];
console.log(freinds);

const y = new Array(1991, 1984, 2000, 2020);

console.log(freinds[0]);
console.log(freinds[2]);

console.log(freinds.length);
console.log(freinds[freinds.length - 1]);

freinds[2] = 'jay';
console.log(freinds);


const firstName = 'jonas';
const jonas = ['jonas', 'Schemedtmann', 2037 -1991, 'teacher', freinds];
console.log(jonas);
console.log(jonas.length);

//exercise

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2, age3);

const ages = [calcAge(years[0], calcAge(years[1]), calcAge(years[years.length - 1]))];
console.log(ages);
*/

//Basics Array operations (methods)

//add elements
/*const freinds = ['Michael', 'Steven', 'Peter'];
const newLength = freinds.push('jay');
console.log(freinds);
console.log(newLength);

const length = freinds.unshift('John');
console.log(freinds);
console.log(length);

// //remove elements
freinds.pop();
const popped = freinds.pop(); // Last
console.log(popped);
console.log(freinds);

freinds.shift();
console.log(freinds);

console.log(freinds.indexOf('Steven'));
console.log(freinds.indexOf('Bob'));

freinds.push(23);
console.log(freinds.includes('Steven'));
console.log(freinds.includes('Bob'));
console.log(freinds.includes(23));

if(freinds.includes('Steven')){
    console.log('you have a friends callled Steven');
}

*/


// introduction of objects

/*const jonas = {
    firstName:'jonas',
    lastName:'Schemedtmann',
    birthYear:1991,
    job:'teacher',
    freinds : ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }


    calcAge: function(){
        this.age = 2037 - this.birthYear;

       return this.age;
    },

    getSummary:function () {
        return `${this.firstName} is a ${this.calcAge()} - year old ${jonas.job} 
        and he has ${this.hasDriverLicense ? 'a' : 'no'} driver' License,
        and his freinds are ${this.freinds}`;
    }
};

console.log(jonas.calcAge());

 
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

*/


// Iterations of the loop
/*console.log('lifting weights repetition 1');

console.log('lifting weights repetition 2');


console.log('lifting weights repetition 3');


console.log('lifting weights repetition 4');


console.log('lifting weights repetition 5');
*/

/*

for(let i=1; i<=8; i++){
    console.log(`lifting the weights repetition ${i}`);
}
*/




//Looping Arrays, Breaking and Continuing
/*const jonas = [
    'jonas',
    'Schemedtmann',
    2037 - 1991,
    'teacher',
    ['Michaael', 'Peter', 'Steven'], true
];

const types = [];


// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);

for(let i=0; i<jonas.length; i++){
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    //filling types array

    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i=0; i<years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break

console.log('---ONLY Strings ---');
for(let i=0; i<jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);
    if(typeof jonas[i] !== 'number') break;
    console.log(jonas[i], typeof jonas[i]);
  
}

*/

/*
const jonas = [
    'jonas',
    'Schemedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//0.1,----4
//4,3-----0

for(let i=jonas.length -1; i>=0; i--){
    console.log(i, jonas[i]);
}


for(let excercise = 1; excercise < 4; excercise++){
    console.log(`----Starting excercise ${excercise}`);
    for(let rep =1;  rep<6; rep++){
        console.log(`Excercise ${excercise}: lifting weight repetiotion ${rep}`);
    }
}

*/


//while loop
// let excercise = 1;

// for(let rep =1;  rep<6; rep++){
//     console.log(`Excercise ${excercise}: lifting weight repetiotion ${rep}`);
// }



/*let rep =1;
while(rep <= 10){
    // console.log(`WHILE : lifting weight repetiotion ${rep}`);
    // rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;


while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end.......');

}
    */




