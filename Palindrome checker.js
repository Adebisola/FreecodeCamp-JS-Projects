function palindrome(str) {
    let newStr = str.replace(/\W+|_/gi, "");
    newStr = newStr.toLowerCase();
    console.log(newStr);
    let reversedStr = newStr.split("");
    reversedStr.reverse();
    reversedStr = reversedStr.join("");
    if (reversedStr === newStr) {
        return true;
    }
    return false;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
/* git remote add origin https://github.com/Adebisola/FreecodeCamp-JS-Projects.git
git branch -M main
git push -u origin main*/


/*Another solution */
function palindrome1(string) {
    let newString = string.replace(/\W+|_/g, "");
    newString = newString.toLowerCase();
    console.log(newString);
    let reversedString = "";
    for (let j = newString.length - 1; j >= 0; j--) {
        reversedString += newString[j];
    }
    if (newString === reversedString) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome1("A man, a plan, a canal. Panama"));