//coding cahallenge 1

// log string to console

/*const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`...${data1[0]}°C ... ${data2[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function(arr){
    let str = ' ';

    for(let i = 0; i<arr.length; i++){
        str = str + `${arr[i]}°C in ${i+1} days ...`;

    }  
    console.log(str);    
}
printForecast(data1);
*/


//challenge 2

/*
 I am buliduing time tracking applications for freelancers  write a function called analyse work week  that receives an array of daily work hours for a certain week and return s an object with the following data:   (1) Total hours (2)Averagedayhours(around to one decimal place)  (3)the day that most hours weekend(ask me monday a day 0 in the array)  (4) number of days weekend(days with more than 0 hours) (5)whether the week was full-time worked 35hours or more)
 */

 function analyzeWorkWeek(workHours) {
    const totalHours = workHours.reduce((sum, hours) => sum + hours, 0);
    const averageDayHours = parseFloat((totalHours / workHours.length).toFixed(1));
    
    const maxHours = Math.max(...workHours);
    const maxDayIndex = workHours.indexOf(maxHours);
    
    const workedDays = workHours.filter(hours => hours > 0).length;
    const fullTime = totalHours >= 35;

    return {
        totalHours,
        averageDayHours,
        maxDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][maxDayIndex],
        workedDays,
        fullTime
    };
}

// Example usage:
const workWeek = [7.5, 8, 6.5, 0, 8.5, 4, 0];
 // Monday to Sunday
 const analysis = analyzeWorkWeek(workWeek);
  console.log(analysis);
console.log(analyzeWorkWeek(workWeek));

