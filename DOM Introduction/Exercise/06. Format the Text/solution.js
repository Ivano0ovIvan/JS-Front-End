function solve() {
  let inputText = document.getElementById('input').value;
  let outputElement = document.getElementById('output');
  let sentences = inputText.split('.');
  sentences = sentences
    .filter(s => s.length > 0) // - filters only the sentences with length more than zero
    .map(s => s += '.'); // - append "." at the end of the sentence

  while (sentences.length > 0) {
    let p = document.createElement('p'); // - create new element of type paragraph
    p.textContent = sentences.splice(0, 3).join('');
    outputElement.appendChild(p); // - appends the new paragraphs in the div with id 'outut'
  }

}