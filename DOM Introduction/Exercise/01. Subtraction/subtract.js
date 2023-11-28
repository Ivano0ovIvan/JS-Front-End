function subtract() {

    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondtNum = Number(document.getElementById('secondNumber').value);

    let result = document.getElementById('result');

    result.innerText = firstNum - secondtNum;
}