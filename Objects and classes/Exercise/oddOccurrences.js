function oddOccurrences(inputStr) {

    inputStr = inputStr.toLowerCase();
    let elementsArr = inputStr.split(" ");

    let map = new Map();

    elementsArr.forEach(element => {
        if(map.has(element)) {
            let oldValue = map.get(element);
            let newValue = oldValue + 1;

            map.set(element, newValue);
        }else {
            map.set(element, 1);
        }
    });

    let result = [];

    map.forEach((value, key) => {
        if (value%2 !== 0) {
            result.push(key)
        }
    })

    console.log(result.join(" "));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')