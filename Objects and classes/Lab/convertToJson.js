function convertToJson(firstName, lastName, hairColor) {
    let obj = {name: firstName, lastName: lastName, hairColor: hairColor};
    let jsonString = JSON.stringify(obj);
    console.log(jsonString);
}

convertToJson('George', 'Jones', 'Brown')