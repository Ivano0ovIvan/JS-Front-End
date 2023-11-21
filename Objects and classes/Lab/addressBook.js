function addressBook(stringArr) {
    const addressBookObj = {}
    
    for (const person of stringArr) {
        const [name, address] = person.split(":");
        addressBookObj[name] = address;
    }

    const personNames = Object.entries(addressBookObj);
    const sortedPersonNames = personNames.sort();

    for (let person of sortedPersonNames) {
        console.log(`${person[0]} -> ${person[1]}`);
    }
}


addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

)