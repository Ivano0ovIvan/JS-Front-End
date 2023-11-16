function simpleCalculator(numOne, numTwo, operator) {
    const multiply = (numOne, numTwo) => numOne * numTwo;
    const divide = (numOne, numTwo) => numOne / numTwo;
    const add = (numOne, numTwo) => numOne + numTwo;
    const subtract = (numOne, numTwo) => numOne - numTwo;

    switch (operator) {
        case "multiply": console.log(multiply(numOne, numTwo)); break;
        case "divide": console.log(divide(numOne, numTwo)); break;
        case "add": console.log(add(numOne, numTwo)); break;
        case "subtract": console.log(subtract(numOne, numTwo)); break;
    }
}

function simpleCalculator2(numOne, numTwo, operator) {
    const operations = {
        multiply: (numOne, numTwo) => numOne * numTwo,
        divide: (numOne, numTwo) => numOne / numTwo,
        add: (numOne, numTwo) => numOne + numTwo,
        subtract: (numOne, numTwo) => numOne - numTwo,
    }

    const operatorFunc = operations[operator];
    const result = operatorFunc(numOne, numTwo);
    console.log(result);  // console.log(operations[operator](numOne, numTwo))

}

simpleCalculator2(5,
    5,
    'multiply'
)