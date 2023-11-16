function mathPower(number, power) {
    console.log(Math.pow(number, power));
}


function mathPower2(number, power) {
    let result = 1;

    for (let i = 0; i < power; i++){
        result *= number;
    }

    console.log(result)
}

mathPower2(2, 8)