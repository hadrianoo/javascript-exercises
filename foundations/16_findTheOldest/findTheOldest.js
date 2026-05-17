function yearsLived(born, death) {
    return death === undefined ?
        (new Date()).getFullYear() - born :
        death - born
}

const findTheOldest = function (arr) {

    return arr.reduce((obj, item) => {
        const first = yearsLived(obj.yearOfBirth, obj.yearOfDeath);
        const sec = yearsLived(item.yearOfBirth, item.yearOfDeath);

        return sec > first ? item : obj;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
