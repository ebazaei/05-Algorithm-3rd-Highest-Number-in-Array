// Firday: 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:

// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11



//Solotion 1

let Array1 = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
console.log(`Original Array is: ${Array1}`);
//Variable for 3rd nummer
var num1 = 0

function num3rd(numOutput){

    //Sort nummer by comparator
    let Array2 = Array1.sort((a, b) => a - b);
    console.log(`Sorted Array is: ${Array2}`);

    for( i = Array2.length ; i >= Array2.length - 3 ; i-- ){
        var numOutput = Array2[i];
    }
    return numOutput
}

console.log(`Using the array ${Array1}, the correct answer is : ${num3rd()}`)

console.log("______________________________________________________________")



//Solotion 2

let Array1b = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
console.log(`Original Array B is: ${Array1b}`);

let Array2b = [...Array1].sort((a, b) => a - b);
console.log(`Sorted Array B is: ${Array2b}`);
var num1b = 0
for( i = Array2b.length ; i >= Array2b.length - 3 ; i-- ){
    var num1b = Array2b[i];
}
console.log(`Using the array B ${Array1b}, the correct answer is : ${num1b}`)















