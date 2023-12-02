const reverseString = function(string) {
    let splitString = string.split('');
    let reverseList = splitString.reverse();
    let joinList = reverseList.join('');
    return joinList;


};

// Do not edit below this line
module.exports = reverseString;
