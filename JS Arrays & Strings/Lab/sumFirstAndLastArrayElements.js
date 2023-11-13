function solve (arr) {
    let firstNum = Number(arr[0]);
    let lastNum = Number(arr[arr.length - 1]);
    let result = firstNum + lastNum;
    console.log(result);
}

solve([20, 30, 40])