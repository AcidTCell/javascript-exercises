// Determine which is the larger number


const sumAll = function(firstNum, secondNum) {
    let totalSum = 0;
    if (typeof(firstNum) === 'number' && typeof(secondNum) === 'number' && firstNum >= 0 && secondNum >= 0){
        if(firstNum > secondNum){
            while(secondNum <= firstNum){
                totalSum = totalSum += secondNum;
                secondNum++;
            }
        }
        else if(secondNum >= firstNum){
            while(firstNum <= secondNum){
                totalSum = totalSum += firstNum;
                firstNum++;
            }
        }
        else if(secondNum === firstNum){
            return secondNum*2;
        }
        return totalSum;
    }
    else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
