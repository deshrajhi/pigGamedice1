//scope and chain
/*'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        let output = `${firstName} You  are ${age}, born in ${birthYear}`
    console.log(output);
    

if(birthYear >= 1981 && birthYear <= 1996){
    var millenial = true;

    //creating new variable with same name as outer scope variable;
    const firstName = 'Steven';
   
    //reassigning outer scope variable
    output = 'NEW OUTPUT!';


    const str = `oh and you are a millenial, ${firstName}`;
    console.log(str);

    function add(a,b){
        return a+b;
    }
  
}
    
console.log(millenial);
 
console.log(output);
    }
printAge();
return age;

}

const firstName = 'Jonas';
calcAge(1991);
*/


//function scope
/*function calcAge(birthYear){
    const now = 2037 - birthYear;
    const age = now - birthYear;
    return age;
}

console.log(now);
*/


//Block scope (ES6)

/*if(year >= 1981 && year <= 1996){
    const  millenial = true;
    const  food = 'Avocado toast';
    const year = 1991;
}

console.log(millenial);
*/


//scope chain

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//     console.log(firstName);
//     return age;
// }

// const firstName = ' jonas';
// calcAge(1991);



//Hoisting and TDZ in practice


/*console.log(me);
// console.log(job);
// console.log(year);


var me  = 'JOnas';
let job = 'teacher';
const year = 1991;
// function
console.log(addDecl(2,3));
console.log(addArrow(2,3));

 function addDecl(a,b){
    return a+b;

 }

 var addExpr = function(a,b){
    return a+b;
 };

 const addArrow = (a,b) => a+b;
 // example 
console.log(undefined);
if(!numProducts) deleteShoppingCart();
 var numProducts = 10;

 function deleteShoppingCart(){
    console.log('All products deleted!');
 }
    


 var numProducts = 10;

 function deleteShoppingCart(){
    console.log('All products deleted!');
 }

 var x = 1;
 var y = 2;
 var z = 3;

 console.log(x === window.x);
 console.log(y === window.y);
 console.log(z === window.z);

 */


 //this keyword
//  console.log(this);

 /*const calcAge = function (birthYear){
        console.log(2037 - birthYear);
        console.log(this);
 };

 calcAge(1991);

const Jonas = {
    birthYear: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.birthYear);
    },
}
Jonas.calcAge();


const matilda = {
    birthYear: 2017,
};

matilda.calcAge = Jonas.calcAge;
matilda.calcAge();

const f = Jonas.calcAge;
f();

*/


//Regular function vs arrow function

var firstName = 'Matilda';

const Jonas = {
     firstName : 'Jonas',
    birthYear: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.birthYear);

        // const self = this;

        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
        // };
        const isMillenial = function(){
            console.log(self);
            console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
        };
        // console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        isMillenial();
    },
    greet:() => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

Jonas.greet();
Jonas.calcAge();