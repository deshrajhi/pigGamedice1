/*
const calcAverage =   (a,b,c) =>(a+b+c)/3;
console.log(calcAverage(3,4,5));

//test1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win 🏆 ${avgDolphins} vs, ${avgKoalas}`);
    }else if(avgKoalas >= 2 * avgDolphins){
      console.log(`koalas win 🏆 ({avgKoalas} vs. ${avgDolphins}`);

    }else{
        console.log('No teams wins....');

    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576,111);

//test2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/



//challenge 2
/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

/*const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}
const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

const jonasArray = [
    'Jonas','Schedtmann',2037-1991, 'teacher',['Michael', 'Peter', 'Steven']
];
const  jonas = {
    firstName: 'Jonas',
    lastName: 'Schemedatmann',
    age: 2017-1999,
    job: 'teacher',
    freinds:['Michael', 'Peter', 'Steven']
};
*/


//Introductions to objects
/*const jonasArray = [
    'Jonas', 'Schmedtmann', 2007 - 1991, 'teacher', 'Peter', 'Steven'
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1992,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'] // ✅ Fixed spelling
};

console.log(jonasArray);
console.log(jonas);
console.log(jonas.friends); // Accessing friends property
*/


//Dot vs Bracket Notation
/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1992,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'] // ✅ Fixed spelling
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log('last' + nameKey);

const interestedIn = prompt('What do you want know about Jonas choose between firstName, lastName, age, job, and freinds');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
    console.log(jonasonas[interestedIn]);
}else{
    console.log('Wrong request ! Choose between firstName, lastName, age, job, and freinds');
}

jonas.location = 'Portugal';
jonas['twitter'] = 'Jonasschedtmann';
console.log(jonas);


console.log(`${jonas.firstName} has jonas.friends has ${jonas.friends.length} freinds , and his best freind is called ${jonas.friends[0]}`);

*/


/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    birthYear: 2037-1991,
    job : 'teacher',
    freinds:['Michael', 'Peter', 'Steven'],
    hasDriversLicense:true,
   
    


//  calcAge : function (birthYear){
//     return 2037 - birthYear;
// }

};

console.log(jonas.calcAge(1991));
console.log(jonas.calcAge(1991));
*/



//coding challenge #4

/*let bills = [22, 295 , 176 , 440 , 37 , 105 , 10 , 1100 , 86 , 52];
let tips = [];
let totals = [];

const calcTip = function(bill){
    return bill >= 50 && bill <=300 ? bill *0.15 : bill * 0.2;


}

for(let i=0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i =0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
