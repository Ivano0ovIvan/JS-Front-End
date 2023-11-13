function arrayRotation(arr, numOfRotations) {
    for (let i=0; i<numOfRotations; i++){
        let currentNum = arr.shift(arr[i]);
        arr.push(currentNum);
    }

    console.log(arr.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2)