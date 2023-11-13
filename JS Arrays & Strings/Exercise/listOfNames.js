function listOfNames (array) {
    let sortedArray = array.sort((a, b) => {
        return a.localeCompare(b)  // sort alphabetically in ascending order
    });

    let index = 1;

    for (let name of array){
        console.log(`${index}.${name}`);
        index++
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])