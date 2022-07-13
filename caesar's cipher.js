function rot13(str) {
    // return str.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + 13) % 26 + 65));

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < str.length; i++) {

        console.log(alphabet.indexOf(str[i]));
        if (alphabet.indexOf(str[i]) >= 13) {
            result += alphabet[alphabet.indexOf(str[i]) - 13]
        } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
            result += alphabet[alphabet.indexOf(str[i]) + 13]

        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(rot13("SERR PBQR PNZC"));

console.log(money);
var money = 2; // undefined
let money = 3; // reference error