function piccolo(inputArr) {
    let parking = []

    for (let i = 0; i < inputArr.length; i+=1) {
        let currentCommand = inputArr[i].split(", ")[0];
        let currentCar = inputArr[i].split(", ")[1];

        if (currentCommand === "IN" && !parking.includes(currentCar)) {
            parking.push(currentCar);
        }else if (currentCommand === "OUT" && parking.includes(currentCar)) {
            let index = parking.indexOf(currentCar);
            parking.splice(index, 1);
        }
    }

    if (parking.length > 0) {
        let sortedNumbers = parking.sort((a, b) => {
            return a.localeCompare(b)
        });
        sortedNumbers.forEach(number => console.log(number))

    }else {
        console.log("Parking Lot is Empty");
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)