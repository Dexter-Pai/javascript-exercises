function removeEach(arg1, arg2) {
    arg1.splice(arg1.indexOf(arg2),1);
    return arg1;
}

const removeFromArray = function() {
    if (arguments.length <= 1) {
        return 'not enough arguements';
    } else {
        let solved_array = arguments[0];
        for (let i = 0; i < arguments.length - 1; i++) {
            if (solved_array.indexOf(arguments[i + 1]) === -1) {
                continue;
            }
            solved_array = removeEach(solved_array, arguments[i+1]);
        }
        return solved_array;
    }
};

console.log(removeFromArray([1,2,3,4],7, 2, 4, '1', 3))

// Do not edit below this line
module.exports = removeFromArray;
