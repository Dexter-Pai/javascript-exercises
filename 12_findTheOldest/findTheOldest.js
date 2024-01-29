const findTheOldest = function(peopleArray) {
const currentYear = new Date().getFullYear();
const years = peopleArray.map(object => {
    if (object.yearOfDeath === undefined) return currentYear - object.yearOfBirth;
    else return object.yearOfDeath - object.yearOfBirth;
})
const reduced = years.reduce((largest, current) => {
    if (largest > current) return largest;
    else return current;
})
const index = years.findIndex(e => e == reduced);
return peopleArray[index];
};

// Do not edit below this line
module.exports = findTheOldest;
