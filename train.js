console.log("TRAIN AREA");

// NodeJs event loop va Callback functionlarni o'rganamiz

console.log("Jack Ma Maslahaltlari!");

const list = [
  "yaxshi talaba bo'ling!", // 0 - 20
  "to'g'ri boshliq tanlang va ko'proq xato qiling!", // 20 - 30
  "o'zingizga ishlashzni boshlang!", // 30 - 40
  "siz kuchli bo'lgan narsalarni qiling!", // 40 - 50
  "yoshlarga investitsiya qiling!", // 50 - 60
  "endi dam oling, foydasi yo'q endi", // 60 
];


function maslahatBering(a, callback) {
    if(typeof a !== 'number') callback("insert a number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        callback(null, list[5]);
    }
}
console.log('passed here 0');
maslahatBering(10, (err, data) => {
    if(err) console.log('ERROR:', err);
    console.log('javob:', data);
});
console.log('passed here 1');




/* A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/
function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
} 
const result = countLetter("e", "engineer");
console.log(result);