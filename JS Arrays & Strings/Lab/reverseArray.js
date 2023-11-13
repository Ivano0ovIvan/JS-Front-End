function reverse(n, arr) {
    let newArr = [];
    for(let i = 0; i < n; i++){
        newArr.push(arr[i]);
    }
    let reversedArr = newArr.reverse();
    console.log(reversedArr.join(" "))
}

reverse(2, [66, 43, 75, 89, 47])