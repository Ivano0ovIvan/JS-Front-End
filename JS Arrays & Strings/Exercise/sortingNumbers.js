function sortingNumbers(array) {
    let sortedArray = array.sort((a, b)=> a - b); //sort in ascending order
    let resultArray = [];
    
    while (sortedArray.length > 0){
        let smallestNum = sortedArray.shift();
        resultArray.push(smallestNum);
        let bigestNum = sortedArray.pop();
        resultArray.push(bigestNum);
    }

    return resultArray; 
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])