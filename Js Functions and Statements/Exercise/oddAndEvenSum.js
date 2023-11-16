function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;
    let stringOfNum = num.toString();
    for (let i = 0; i < stringOfNum.length; i++) {
        let currentDigit = Number(stringOfNum[i]);

        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }
    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    console.log(result);
}

oddAndEvenSum(1000435)