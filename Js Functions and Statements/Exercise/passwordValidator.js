function passwordValidator(password){
    function isValidLength(passText){
        return passText.length >= 6 && passText.length <= 10;
    }

    function isAlphanumeric(passText){
        let regex =/^[A-Za-z0-9]+$/gm;
        let isCorrect = regex.test(passText);
        return isCorrect;
    }

    function checkCountOfDigits(passText){
        let count = 0;
        for (const digit of passText) {
            if (!isNaN(digit)){
                count++;
            }
        }

        return count >= 2;
    }


    if (isValidLength(password) && isAlphanumeric(password) && checkCountOfDigits(password)){
        console.log("Password is valid");
    }else{
        if (!isValidLength(password)){
            console.log("Password must be between 6 and 10 characters");
        }

        if (!isAlphanumeric(password)){
            console.log("Password must consist only of letters and digits")
        }

        if (!checkCountOfDigits(password)){
            console.log("Password must have at least 2 digits")
        }
    }
}

passwordValidator('logIn')