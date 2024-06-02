console.log("TRAIN AREA");

/*
  G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

*/

function getHighestIndex(arr){


    let max = arr[0];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        
        } 
        
    } 
    return index;
}

console.log(getHighestIndex([1, 34, 56, 89]))

// the second method
// function getHighestIndex(arr) {

//     const result = arr.reduce((maxIndex, currentValue, currentIndex) => {
//         return currentValue > arr[maxIndex] ? currentIndex : maxIndex;
//     }, 0);

//     return result
// }
// console.log(getHighestIndex([1, 34, 56, 35]))




