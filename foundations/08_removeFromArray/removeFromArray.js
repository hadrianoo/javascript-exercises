const removeFromArray = function (arr, ...theArgs) {

    arr = Array.from(new Set(arr));

    for (let num of theArgs) {
        if (arr.includes(num)) {
            arr.splice(arr.findIndex((value) => value == num), 1)
        };
    };
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
