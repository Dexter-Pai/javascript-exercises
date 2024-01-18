const sumAll = function(num1, num2) {

    if (! isNumber(num1, num2)) return 'ERROR';

    if (! isPositiveInteger(num1, num2)) return 'ERROR';

    switch(true) {
        case(num1 < num2) :
        return sumNumber(num1, num2);

        case(num2 < num1) :
        return sumNumber(num2, num1);
    }
};

function isPositiveInteger(a, b) {
    return (a >= 0 && b >= 0) ? true: false;
}

function isNumber (a , b) {
    return (typeof(a) === 'number' && typeof(b) === 'number') ? true : false;
}

function sumNumber(small, large) {
    let sum = 0;
    for ( let i = small; i <= large; i++) {
        sum += i;
    }
    return sum;
} 
// Do not edit below this line
module.exports = sumAll;
