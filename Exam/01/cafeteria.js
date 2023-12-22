function solve(input) {
    
    const baristasCount = Number(input.shift());

    let baristasArr = [];

    for (let index = 0; index < baristasCount; index++) {
        const [name, shift, ...coffeTypes] = input.shift().split(' ');
        
        let coffeTypesArr = coffeTypes[0].split(',')
        
        baristasArr.push({
            name,
            shift,
            coffeTypes: coffeTypesArr
        });
    };

    while (input.length > 0) {
        const command = input.shift();

        if (command === 'Closed') {

        }

        const [action, name, ...value] = command.split(' / ');
        
        switch (action) {
            case 'Prepare':
                const [shift, coffeType] = value;
                const barista = baristasArr.find(barista => barista.name === name);

                if (barista.shift !== shift || !barista.coffeTypes.includes(coffeType)) {
                    console.log(`${name} is not available to prepare a ${coffeType}.`)
                } else {
                    console.log(`${name} has prepared a ${coffeType} for you!`);
                };

                break;
        
            case 'Change Shift':
                
                const newShift = value[0];
                const baristaToChange = baristasArr.find(barista => barista.name === name);
                
                console.log(`${name} has updated his shift to: ${newShift}`);
                baristaToChange.shift = newShift;
                
                break;

            case 'Learn':
                const newCoffeeType = value[0];
                const baristaToLearn = baristasArr.find(barista => barista.name === name);
                
                if (baristaToLearn.coffeTypes.includes(newCoffeeType)) {
                    console.log(`${name} knows how to make ${newCoffeeType}.`);
                } else {
                    console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`);
                    baristaToLearn.coffeTypes.push(newCoffeeType)
                }
                break;
        };
    };

    baristasArr.forEach(barista => {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeTypes.join(', ')}`);
    });
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha.Latte',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
)