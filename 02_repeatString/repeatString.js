const repeatString = function(x, y) {
    let originalString = '';
    let repeatNum = y;
    if (y < 0){
        return "ERROR";
    }
    while (repeatNum > 0){
        originalString = originalString += x;
        repeatNum--;
    }
    return originalString;

};

// Do not edit below this line
module.exports = repeatString;
