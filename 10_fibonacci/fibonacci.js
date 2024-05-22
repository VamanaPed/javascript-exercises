const fibonacci = function(number) {
    let num = number;
    if(!Number.isInteger(number)) num = parseInt(number);

    if(num < 0) return "OOPS";
    if(num === 0) return 0;
    if(num === 1) return 1;

    let a = 0;
    let b = 1;
    for (let i = 1; i < num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
