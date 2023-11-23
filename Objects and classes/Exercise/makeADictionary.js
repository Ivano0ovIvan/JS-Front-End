function makeADictionary(stringArr) {
    let dictionary = {}
    
    stringArr.forEach(currentString => {
        let currentObj = JSON.parse(currentString)
        for (const el of Object.entries(currentObj)) {
            let [key, value] = el;
            dictionary[key] = value;
        }
    });

    let sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    let sortedDictionary = {};

    sortedKeys.forEach(currentKey => {
        sortedDictionary[currentKey] = dictionary[currentKey];
    });

    for (const el of Object.entries(sortedDictionary)) {
        let [key, value] = el
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )