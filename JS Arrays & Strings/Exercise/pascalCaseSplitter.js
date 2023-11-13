function pascalCaseSpliter(text){
    let regex = /[A-Z][a-z]*/g;
    let wordsArray = text.match(regex);
    let resultAsString = wordsArray.join(", ");

    console.log(resultAsString);
}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan')