function loadingBar(num){
let percentCount = '%'.repeat(num / 10)
let dotsCount = '.'.repeat(10 - (num / 10))

    if (num === 100){
        console.log("100% Complete!");
        console.log(`[${percentCount}]`)
    }else{
        console.log(`${num}% [${percentCount}${dotsCount}]`)
        console.log("Still loading...")
    }
}

loadingBar(60)