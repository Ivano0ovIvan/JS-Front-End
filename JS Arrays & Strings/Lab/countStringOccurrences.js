function solve(text, wordToBeCounted) {
    let counter = 0;
    let words = text.split(" ");
    for (let word of words){
        if (word === wordToBeCounted){
            counter += 1;
        }
    }

    console.log(counter)
}

solve('This is a word and it also is a sentence', 'is')