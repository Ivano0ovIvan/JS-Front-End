function JsonToObject(jesonText) {
    let obj = JSON.parse(jesonText);
    for (const el of Object.entries(obj)) {
        const[key, value] = el;
        console.log(`${key}: ${value}`)
    }
}

JsonToObject('{"name": "George", "age": 40, "town": "Sofia"}')