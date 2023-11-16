function signCheck(a, b, c) {
    const result = a * b * c;
    if (result >= 0){
        console.log('Positive');
    }else {
        console.log('Negative')
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);