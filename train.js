console.log("TRAIN AREA");

/*
  D-TASK: 

  Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
   MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

function checkContent(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');

    return sorted1 === sorted2;
}

test = checkContent("mitgroup", "gmtiprou");
console.log(test); 