const repeatString = function(a, b) {
    if (b < 0) {
        return 'ERROR';
    }
    let ans = '';
    for (let i = 0; i < b; i++) {
        ans += a;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
