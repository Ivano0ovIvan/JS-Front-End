function factorialDivision(firstNum, secondNum) {
    function getFactorial(num) {
        if (num === 0) {
            return 1;
        }else {
            return num * getFactorial(num - 1);
        }
    }
    let result = (getFactorial(firstNum) / getFactorial(secondNum)).toFixed(2)
    console.log(result);
}

factorialDivision(6, 2)