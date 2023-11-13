function censoredWords(text, wordForCensor) {
    let regExp = new RegExp(wordForCensor, 'g');
    let censoredText = text.replace(regExp, ("*").repeat(wordForCensor.length));
    console.log(censoredText);
}

function solve(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

solve('A small sentence with some words small', 'small')
censoredWords('A small sentence with some small words small', 'small')