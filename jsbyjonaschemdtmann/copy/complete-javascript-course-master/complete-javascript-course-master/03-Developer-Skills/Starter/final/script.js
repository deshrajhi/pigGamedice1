// const arr = [17, 21 , 23];
// integeration of the problem
//what is temp application ? Answers difference between the two arrays

// how to compute max and min temperature
/*const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]; 

const calcTempAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i<temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
        if(temps[i] > max){
            max = temps[i];
        }
        console.log(max);
    }

};
calcTempAmplitude([3, 7, 4, 1, 8, 9]);
*/

// const array1 = ["a" , "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2);
// console.log(array3);




/*const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit : 'celsius',
        value : Number(prompt('Degrees celsius:')),
    };
    console.log(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
};
console.log(measureKelvin());

//using a debugger
const measurement = {
    type: 'temp',
    unit : 'celsius',
    value : 10,
};
console.log(measurement);

const calcTempAmplitudeBug = function(t1,t2){
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];


    for(let i = 0; i<temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        debugger;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

*/




