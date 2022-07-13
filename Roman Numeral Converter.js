function convertToRoman(num) {
    let key = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let numInRoman = '';
    for (let i in key) {
        // console.log(key[i]);
        console.log(i);
        while (num >= key[i]) {
            numInRoman += i;
            console.log(numInRoman);
            num -= key[i];
        }
    }
    return numInRoman;
}

convertToRoman(44);