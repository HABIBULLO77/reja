console.log("TRAIN AREA");

/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: findDoublers("hello") return true return qiladi

@MITASK
*/

function findDoublers(str) {
    let arr = str.split('');
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr2.push(arr[i]);
        }
    
    }
    if (arr2.length > 0) {
        return true;
        } else {
            return false;
    }
}
console.log(findDoublers("hello"));

// the second method

// function findDoublers(str) {
//     const sortedStr = str.split('').sort().join('');

//     for (let i = 0; i < sortedStr.length - 1; i++) {
//         if (sortedStr[i] === sortedStr[i + 1]) {
//             return true;
//         }
//     }

//     return false;
// }
