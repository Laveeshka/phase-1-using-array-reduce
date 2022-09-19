//////// DEMONSTRATION /////////
//reduce array method takes in two arguments: the callback function and optional start value assigned to the accumulator
//the final value of the accumulator is returned
//In the absence of an initial value, the first element in the array is used as the starting value. Watch out lavee e_e
const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){return element * 2 + accumulator}, 0);
console.log(doubledAndSummed);

const letters = ['a', 'b', 'c', 'b', 'a', 'a'];
const lettersCount = letters.reduce(function(countObj, currentLetter){
    if (currentLetter in countObj) {
        countObj[currentLetter]++;
    } else {
        countObj[currentLetter] = 1;
    }
    return countObj;
}, {});
console.log(lettersCount);

/////// LAB ////////
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator, element) => accumulator + element, 0);
console.log(totalBatteries);