function ages(input) {
    let result;
    if (input >= 0 && input <= 2) {
        result = 'baby';
    } else if (input > 2 && input <= 13) {
        result = 'child';
    } else if (input > 13 && input <= 19) {
        result = 'teenager';
    } else if (input > 19 && input <= 65) {
        result = 'adult';
    } else if (input > 65) {
        result = 'elder';
    } else {
        result = 'out of bounds';
    }
    console.log(result);
}

ages(2)
ages(11)
ages(18)
ages(65)
ages(80)
ages(-80)