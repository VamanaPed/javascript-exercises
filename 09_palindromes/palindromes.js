const palindromes = function (string) {
    let letters = string.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let start = 0;
    let end = letters.length - 1;

    while(start < end)
    {
        if(letters[start] !== letters[end]) return false;

        start ++;
        end --;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
