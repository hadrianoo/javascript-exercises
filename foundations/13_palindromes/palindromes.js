const palindromes = function (string) {
    let specialChars =
        "!@#$%^&*()-_=+[{]};:'\",<.>/?\\| ";
    let clonedString = string
        .toLowerCase()
        .split("")
        .filter(item => !specialChars.includes(item));

    return clonedString.toReversed().join("") === clonedString.join("");

};

// Do not edit below this line
module.exports = palindromes;
