console.log("TRAIN AREA");

/*
  E-TASK: 

    Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
    MASALAN: getReverse("hello") return qilsin "olleh"

*/

function getReverse(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
        
    }
    return reverse;
}
result = getReverse("hello");
console.log(result);