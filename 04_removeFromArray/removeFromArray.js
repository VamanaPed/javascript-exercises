const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        while(array.indexOf(arg) !== -1)
        {
            const index = array.indexOf(arg);
            array.splice(index, 1);
        }
    }
    return array;
};

// Not a good way to do this ^

// Do not edit below this line
module.exports = removeFromArray;
