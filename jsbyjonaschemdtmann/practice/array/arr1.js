/*function findMin(arr){
    let min = arr[0];
    for(let i= 1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

const numbers = [1,2,3,4,5];
console.log(findMin(numbers)); // 1
*/

///2 find maxminum number

/*function findMax(arr){


    let max = arr[0];
    for(let i= 1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

const numbers = [1,2,3,4,5];
console.log(findMax(numbers)); //5
*/

//3 find second largest number
// Find the second largest and second smallest element in an array.

/*function secondLargest(arr){
    let max = arr[0];
    let secondMax = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
    }
    return secondMax;
}

const numbers = [1,2,3,4,5];
console.log(secondLargest(numbers)); //4
*/

//4 find second minimum number

/*function secondMin(arr) {
    // if (arr.length < 4) {
    //     return "Array must have at least two distinct elements";
    // }

    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] > min && arr[i] < secondMin) {
            secondMin = arr[i];
        }
    }

    return secondMin === Infinity ? "No second minimum found" : secondMin;
}

// Example usage
const numbers = [1, 3, 4, 5, 3];
console.log(secondMin(numbers)); // Output: 3
*/


// find 3rd largest number
/*function thirdLargest(arr){
    let max = arr[0];
    let secondMax = arr[0];
    let thirdMax = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max){
            thirdMax = secondMax;
            secondMax = max;
            max = arr[i];
        }
    }
    return thirdMax;
}

const numbers = [1,2,4,5,5,6,7,8,9];
console.log(thirdLargest(numbers));
*/

// find 3rd min value in array
/*function thirdMin(arr) {
    if (arr.length < 3) {
        return "Array must have at least three distinct elements";
    }

    let min = Infinity;
    let secondMin = Infinity;
    let thirdMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            thirdMin = secondMin;
            secondMin = min;
            min = arr[i];
        } else if (arr[i] > min && arr[i] < secondMin) {
            thirdMin = secondMin;
            secondMin = arr[i];
        } else if (arr[i] > secondMin && arr[i] < thirdMin) {
            thirdMin = arr[i];
        }
    }

    return thirdMin === Infinity ? "No third minimum found" : thirdMin;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(thirdMin(numbers)); // Output: 3

*/


// Reverse an array without using an extra array.
 /*function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
 }

    const numbers = [1,2,3,4,5];
    reverseArray(numbers);
    console.log(numbers);
    */


    //Check if an array is sorted (ascending or descending).
    function sortArray(arr) {
        // Sorting in Ascending Order
        let ascArray = [arr].sort((a, b) => a - b);
        
        // Sorting in Descending Order
        let descArray = [arr].sort((a, b) => b - a);
    
        console.log("Original Array:", arr);
        console.log("Ascending Order:", ascArray);
        console.log("Descending Order:", descArray);
    }
    
    // Example usage
    const numbers = [5, 3, 8, 1, 9, 2];
    sortArray(numbers);