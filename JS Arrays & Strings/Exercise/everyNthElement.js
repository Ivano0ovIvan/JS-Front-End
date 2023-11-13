function solve(arr, step) {
    let newArr = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i += step){
        newArr.push(arr[i]);
    }

    return newArr;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)