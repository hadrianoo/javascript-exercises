const sumAll = function (a, b) {
    let result = 0;
    if (a > b) {
        [a, b] = [b, a]
    }
    if (a < 0 ||
        b < 0 ||
        !Number.isInteger(a) ||
        !Number.isInteger(b))
        return "ERROR";

    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
