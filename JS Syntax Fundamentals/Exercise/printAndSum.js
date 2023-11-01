function printAndSum(startNum, endNum) {
    let buffer = "";
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        buffer += i + " ";
        sum += i;
    }

    console.log(buffer);
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)