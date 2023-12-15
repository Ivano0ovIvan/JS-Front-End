function solve(input) {

    const riderCount = Number(input.shift()); // - get the first element of the input array
    const riders = {};

    for (let index = 0; index < riderCount; index++) {
        const riderLine = input.shift();
        const ridersDetails = riderLine.split('|');
        
        const [name, fuel, position] = ridersDetails;
        
        riders[name] = {
            fuel: Number(fuel),
            position: Number(position)
        };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Finish') {

        commandLine = commandLine.split(' - ');
        const command = commandLine.shift();

        switch (command) {
            case 'StopForFuel': {
                const rider = commandLine.shift();
                const minimumFuel = Number(commandLine.shift());
                const changedPosition = Number(commandLine.shift());

                if (riders[rider].fuel < minimumFuel) {
                    riders[rider].position = changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                }else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }

                break;
            }
            case 'Overtaking': {
                const firstRider = commandLine.shift();
                const secondRider = commandLine.shift();

                const firstRiderPosition = riders[firstRider].position;
                const secondRiderPosition = riders[secondRider].position;

                if (firstRiderPosition < secondRiderPosition) {
                    riders[firstRider].position = secondRiderPosition;
                    riders[secondRider].position = firstRiderPosition;
                    console.log(`${firstRider} overtook ${secondRider}!`)
                }

                break;
            }
            case 'EngineFail': {
                const rider = commandLine.shift();
                const lapsLeft = Number(commandLine.shift());

                delete riders[rider] // - removes the object from the array

                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
                break;
            }
        }

        commandLine = input.shift();
    };

    for (const riderName in riders) {
        console.log(riderName)
        console.log(`  Final position: ${riders[riderName].position}`)
    };

}

solve(
    (["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

)