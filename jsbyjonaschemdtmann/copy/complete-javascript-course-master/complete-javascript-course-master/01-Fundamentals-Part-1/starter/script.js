/*let js = "amazing";
console.log(40+8+23-10);

console.log("jonas");
console.log(23);


let firstName = "matilda";
let first = 'jonas'



// real constant write upperCase variable name
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JN';

let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

//data types
//  true;
//  console.log(true);

//  let javascriptIsFun = true;
//  console.log(javascriptIsFun);

//  console.log(typeof javascriptIsFun);
// //  console.log(typeof true);
//  console.log(typeof javascriptIsFun);
// //  console.log(typeof 23);
// //  console.log(typeof 'jones');

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);


// let char & var
/*
let age =30;
age =31;
const birthYear = 1991;
//birtYeaar=1990;

// const job;

var job = 'programmer';

job = 'teacher';

lastName = 'schemdtmann';
console.log(lastName);
*/

// basics operators
//math operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah =now - 2020;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas/10, 2 ** 3);
// 2 += 3 means 2 to the power of 3 -2--2--2

const firstName = 'jonas';
const lastName = 'schemedtmann';
console.log(firstName + ' ' + lastName);

// Assignments operators

let x = 10 + 5;
x += 18;
x += 4;
x++;
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

//comparison operator

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;
console.log(now-1999 > now - 2018);
*/

// operator precedence

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;


console.log(now - 1991 > now - 2018);

let x,y;
x = y = 25 - 10 - 5;
console.log(x,y);
*/

/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'am"  + firstName + ',a' + (year + birthYear) + 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log(`string with \n\
    multiple \in\lines`);

    console.log(`string
        multiple
        lines`);
        */

/*
const age = 19;
const isOldEnough = age >= 18; 
if(isOldEnough){
   console.log('sarah can start driving license');
} else{
    const yearLeft =  18 -age;
    console.log(`Sarah is two young. wait another ${yearsLeft} years :}`);
}    

const birthYear = 1998;
let century;
if(birthYear <= 2000){
    let century = 20;
}else{
    let century = 21;
}
console.log(century);
*/

// type conversion
/*
const inputYear = 1991;
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
*/

//type coercion
/*console.log('I am' + 23 + 'years old');

console.log('23' -'10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
console.log(n);
*/



// Truthy and faisy Values
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money =100;
if(money){
    console.log("Don't spend it all;");
}else{
    console.log('You should get a job');
}

let height = 123;
if(height){
    console.log('YAY! height is defined');

}else{
    console.log('height is undefined');
}
*/

// equality operators
/*
const age = 18;
if(age === 18) console.log('you just become an adult:D(strict)');
 
if(age == 18) console.log('you just become an adult:D(looser)');
prompt("what your favourite number?");

let favourite = 100;9
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('cool! 23 is an amazing number');
}
else if(favourite === 7){
    console.log('7 is also  cool number');
}else if(favourite === 9){
    console.log('9 is also cool number');
}else{
    console.log('Number is not 23 or 7 or 9');
}
    */


/*const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//     console.log('sarah is able to drive');
// }else{
//     console.log('someone else should drive');
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && !isTired)

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('sarah is able to drive');
}else{
    console.log('someone else should drive...');
}
*/



// switch statements
/*const day = 'friday';
switch(day){
    case 'monday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory Videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend : D");
        break;
    default:
            console.log("not a valid day");
}

if(day === "monday"){
    console.log('plan course structure');
    console.log('Go to coding meetup');
}else if(day === "tuesday"){
    console.log('Prepare theory Videos');
}else if(day === "wednesday" || day === "thursday"){
    console.log('Write code examples');
}else if(day === "friday"){
    console.log('Record videos');

}else if(day === "saturday" || day === "sunday"){
    console.log("Enjoy the weekend");
}else{
    console.log("not a valid day");
}

*/

//Statements and expressions
// 3*4;

// 1991;
// true && false && !false
 
// if(23 > 10){
//     const str = '23 is bigger';
// }
// console.log(`I'm ${2037 - 1991} years old ${23 > 10}`);

//conditional ternary operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if(age >= 18){
  drink2 = 'wine 🍷' ; 
}else{
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink  ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

//modern js start after this
