const reverseString = function(text) {
    let ans = '';
    for (let i = text.length - 1; i >= 0; i--) {
        ans += text[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
