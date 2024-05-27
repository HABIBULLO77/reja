console.log("TRAIN AREA");

let text = "mitgroup";
newText = text.split("").sort().join("");
console.log(newText);

// /* MITASK-C 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
// hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
// Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); 
// shop.qoldiq() return hozir 20:40da 4ta non, 
// 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq()
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! 
// */

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.products = {
//             non: non,
//             lagmon: lagmon,
//             cola: cola
//         };
//     }

//     getCurrentTime() {
//         const now = new Date();
//         return now.getHours() + ":" + now.getMinutes();
//     }

//     qoldiq() {
//         const time = this.getCurrentTime();
//         console.log(`Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`);
//         return `Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
//     }

//     sotish(mahsulot, miqdor) {
//         if (this.products[mahsulot] !== undefined && this.products[mahsulot] >= miqdor) {
//             this.products[mahsulot] -= miqdor;
//             const time = this.getCurrentTime();
//             console.log(`Hozir ${time}da ${miqdor}ta ${mahsulot} sotildi.`);
//         } else {
//             console.log(`Mavjud emas yoki yetarli miqdorda emas.`);
//         }
//     }

//     qabul(mahsulot, miqdor) {
//         if (this.products[mahsulot] !== undefined) {
//             this.products[mahsulot] += miqdor;
//             const time = this.getCurrentTime();
//             console.log(`Hozir ${time}da ${miqdor}ta ${mahsulot} qabul qilindi.`);
//         } else {
//             console.log(`Noto'g'ri mahsulot nomi.`);
//         }
//     }
// }

// // Funksiyani sinab ko'rish
// const shop = new Shop(4, 5, 2);
// shop.qoldiq(); 
// shop.sotish('non', 3); 
// shop.qabul('cola', 4); 
// shop.qoldiq();




/*B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/
// function countDigits(str) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             count++
//         }
//     }
//     return count;
// }

// const result = countDigits("ad2a54y79wet0sfgb9");
// console.log("Result: ", result);
// NodeJs event loop va Callback functionlarni o'rganamiz

// console.log("Jack Ma Maslahaltlari!");

// const list = [
//   "yaxshi talaba bo'ling!", // 0 - 20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling!", // 20 - 30
//   "o'zingizga ishlashzni boshlang!", // 30 - 40
//   "siz kuchli bo'lgan narsalarni qiling!", // 40 - 50
//   "yoshlarga investitsiya qiling!", // 50 - 60
//   "endi dam oling, foydasi yo'q endi", // 60 
// ];

// CALLBACK FUNCTION
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }
// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });
// console.log('passed here 1');

// ASYNC FUNCTION
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject)=> {
//             setTimeout(()=> {
//                 resolve(list[5]);
//             }, 5000)
//         })
//         //return list[5];
//         // setTimeout(function() {
//         //     return list[5];
//         // }, 5000);
//     }
// }
// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });

// call via then/catch
// maslahatBering(-25).then(data => {
//     console.log('javob:', data);
// }).catch(err => {
//     console.log('ERROR:', err);
// })
// console.log('passed here 1');

// call via async/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();


/* A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/
// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// } 
// const result = countLetter("e", "engineer");
// console.log(result);