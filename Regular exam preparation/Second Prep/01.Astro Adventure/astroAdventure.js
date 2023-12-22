function astroAdventure(input) {

    const astronautsArr = [];
    const astronautsCount = Number(input.shift());

    for (let index = 0; index < astronautsCount; index++) {
        const [name, oxygen, energy] = input.shift().split(' ');
        astronautsArr.push({
            name,
            oxygen: Number(oxygen),
            energy: Number(energy)
        });
    };

    while (input.length > 0) {
        const command = input.shift();

        if (command === 'End') {

        }

        const [action, name, value] = command.split(' - ');
        
        switch (action) {
            case 'Explore':
                const neededEnergy = Number(value);
                const astronaut = astronautsArr.find(astronaut => astronaut.name === name);

                if (astronaut.energy >= neededEnergy) {
                    astronaut.energy -= neededEnergy;
                    console.log(`${name} has successfully explored a new area and now has ${astronaut.energy} energy!`);
                } else {
                    console.log(`${name} does not have enough energy to explore!`);
                }

                break;
        
            case 'Refuel':
                
                const amount = Number(value);
                const astronautToRefuel = astronautsArr.find(astronaut => astronaut.name === name);

                if (astronautToRefuel) {
                    // let energyToFull = 200 - astronautToRefuel.energy;
                    // let energyRecovered = 0;
                    // if (amount > energyToFull) {
                    //     energyRecovered = energyToFull
                    // } else {
                    //     energyRecovered = amount;
                    // };
                
                    const energyRecovered = Math.min(amount, 200 - astronautToRefuel.energy)
                    astronautToRefuel.energy += energyRecovered;
                    
                    console.log(`${name} refueled their energy by ${energyRecovered}!`)
                }
                break;

            case 'Breathe':
                const amountOxygen = Number(value);
                const astronautToBreath = astronautsArr.find(astronaut => astronaut.name === name);

                if (astronautToBreath) {
                
                    const oxygenRecovered = Math.min(amountOxygen, 100 - astronautToBreath.oxygen)
                    astronautToBreath.oxygen += oxygenRecovered;
                    
                    console.log(`${name} took a breath and recovered ${oxygenRecovered} oxygen!`)
                }
                break;
        };
    };

    astronautsArr.forEach(astronaut => {
        console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`)
    });

}

astroAdventure(['3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End']
)