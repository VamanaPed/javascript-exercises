const reverseString = function(string) {
    let reversed = "";
    for(let i = 0; i < string.length; i ++)
    {
        reversed += string.at(string.length - i - 1);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
