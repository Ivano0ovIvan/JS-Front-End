function matrix(n) {
    function printRow(num){
        let row = (num.toString() + " ").repeat(num);
        return row;
    }

    for (let currentRow = 1; currentRow <= n; currentRow++) {
        console.log(printRow(n))
    }
}

matrix(3)