function hashTag(text) {
    let regex= /#[A-Za-z]+/gm;
    let matches = text.match(regex);

    for (let word of matches){
        word = word.replace("#", " ")
        console.log(word);
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')