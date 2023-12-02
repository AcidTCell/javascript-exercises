const removeFromArray = function(array, ...theArgs) {
    for (const arg of theArgs){
        for (const num of array){
            if (num === arg){
                let indexNum = array.indexOf(num);
                array.splice(indexNum,1);
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
