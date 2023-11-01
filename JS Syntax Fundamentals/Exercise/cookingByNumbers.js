function cookingByNumbers(numberAsString, op1, op2, op3, op4, op5) {
    let number = Number(numberAsString);
    let arrOp = [];
    arrOp.push(op1);
    arrOp.push(op2);
    arrOp.push(op3);
    arrOp.push(op4);
    arrOp.push(op5);

    for (let i = 0; i< arrOp.length; i++) {
        let currentOp = arrOp[i];

        switch(currentOp) {
            case "chop": number /= 2; break;
            case "dice": number = Math.sqrt(number); break;
            case "spice": number += 1; break;
            case "bake": number *= 3; break;
            case "fillet": number *= 0.80; break;
        }
        console.log(number)
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')