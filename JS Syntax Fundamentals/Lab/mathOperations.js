function mathOperators(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
        default: result = "Not a valid operator";
    }
    console.log(result)
}

mathOperators(5, 6, '++')