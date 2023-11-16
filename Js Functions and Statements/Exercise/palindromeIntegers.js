function palindromeIntegers(arr){
    function isPalindrome(num){
        let numAsString = num.toString();
        let reversedNum = numAsString.split('').reverse().join('');

        return numAsString === reversedNum
    }

    for (let num of arr){
        console.log(isPalindrome(num));
    }
}

palindromeIntegers([32,2,232,1010])