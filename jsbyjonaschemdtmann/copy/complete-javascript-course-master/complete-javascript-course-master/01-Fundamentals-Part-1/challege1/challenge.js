// //coding challenge 1

// let markMass1 = 78;
// let markHeight1 = 1.69;

// let  johnMass1 = 92;
// let  johnHeight1  = 1.95;

// //calculate BMI for data1

// let markBMI1 = markMass1/(markHeight1**2);
// let johnBMI1 = johnMass1/(johnHeight1**2);

// //compare BMI for data

// let markHigherBMI1 = markBMI1 >  johnBMI1;

// console.log('Data1:');
// console.log("mark's BMI:", johnBMI1);
// console.log("Does mark have a higher BMI than john?", markHigherBMI1);

// //data 2: Mark's and john's mass and height

// let markMass2 =95;
// let markHeight2 = 1.88;
// let johnMass2 =85;
// let johnHeight2 =1.76;

// //calculate BMI for data2
// let markBMI2 = markMass2/(markHeight2 * markHeight2);
// let johnBMI2 = johnMass2/(johnHeight2*johnHeight2);

// //compare BMI for data2
// let markHeigherBMI2 = markBMI2 > johnBMI2;

// console.log("\nData 2:");
// console.log("mark's BMI:",markBMI2);
// console.log("john's BMI:",johnBMI2);
// console.log("does mark have a higher BMI than john?",markHeigherBMI2);

/*
const massMark =95;
const heightMark = 1.88;
 const massJohn = 85;
 const heightJohn = 1.76;

 const BMIMark = massMark / heightMark ** 2;
 const BMIJohn = massJohn / heightJohn ** 2;
 const markHeigherBMI = BMIMark > BMIJohn;

 console.log(BMIMark > BMIJohn);

 console.log(BMIMark, BMIJohn, markHeigherBMI);

*/



 // challenge 3


//  const scoreDolphins = (96 +108 +89) / 3;
//  const scoreKoalas = (88 + 91 + 110) / 3;

//  console.log(scoreDolphins, scoreKoalas);
//  if(scoreDolphins > scoreKoalas){
//     console.log("Dolphin's win the trophy");
//  }else if(scoreDolphins < scoreKoalas){
//     console.log("Koalas win the trophy");
//  }else if(scoreDolphins === scoreKoalas){
//     console.log("Boths are win the trophy");
//  }

 // calculating the average

//  bonus1
/*const scoreDolphins = (97 +112 +80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);
if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
   console.log("Dolphin's win the trophy 😎");
}else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100){
   console.log("Koalas win the trophy");
}else if(scoreDolphins === scoreKoalas &&  scoreDolphins >= 100  && scoreKoalas >= 100){
   console.log("Boths are win the trophy");
}else{
    console.log("No one's can win the trophy  😎 🚀 🌟");

}
    */



//coding challenge 4

 const bill = 430;
 const tip = bill <=300 && bill >= 50 ? bill *0.15:
 bill * 0.2;
 console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


