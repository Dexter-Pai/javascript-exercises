// const fibonacci = function(sequence) {
//     if (sequence == 1 || sequence == 2) return 1;
//     let a = b = 1;
//     let c = null;
//     for (let i = 3; i <= sequence; i++) {
//         c = a + b;
//         a = b;
//         b = c;   
//     }
//     console.log(c);
//     return c;
// };
// fibonacci(6);

const fibonacci = function(sequence) {
    if(sequence == 0) return 0;
    if(sequence < 0) return 'OOPS';
    let fibseq = [1,1];
    for (let i = 3; i <= sequence; i++) fibseq[i - 1] = fibseq[i - 3] + fibseq[i - 2];
    return fibseq[sequence - 1];
}

// Do not edit below this line
module.exports = fibonacci;