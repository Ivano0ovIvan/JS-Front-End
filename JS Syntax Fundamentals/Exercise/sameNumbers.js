function sameNumbers(number) {
    let numAsString = String(number);
    let sumOfNumbers = 0;
    let numbersAreSame = true;
    for (let i = 0; i < numAsString.length; i++) {
        let firstNum = numAsString[0];
        if (firstNum != numAsString[i]) {
            numbersAreSame = false;
        }
        sumOfNumbers += Number(numAsString[i]);
    }

    console.log(numbersAreSame);
    console.log(sumOfNumbers);
}

sameNumbers(1234)