function calc() {
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const result = Number(a) + Number(b);
    const sum = document.getElementById('sum');
    sum.value = result;
}
