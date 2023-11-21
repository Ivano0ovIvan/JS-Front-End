function getObjectData(obj) {
    const {name, area, population, country, postCode } = obj;

    console.log(`name -> ${name}`);
    console.log(`area -> ${area}`);
    console.log(`population -> ${population}`);
    console.log(`country -> ${country}`);
    console.log(`postCode -> ${postCode}`);
} 

function getObjectData2(obj) {
    for (const entry of Object.entries(obj)) {
        const[key, value] = entry
        console.log(`${key} -> ${value}`)
    }
}


getObjectData2({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)