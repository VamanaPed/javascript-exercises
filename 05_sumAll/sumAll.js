const sumAll = function(a, b) {
    if(a < 0 || b < 0) return "ERROR";
    if(typeof a !== "number" || typeof b !== "number") return "ERROR";

    if(a > b) {
        let _a = a;
        a = b;
        b = _a;
    }
    let c = 0;
    for (let i = a; i <= b; i++) {
        c += i;
    }
    return c;
};

// Do not edit below this line
module.exports = sumAll;
