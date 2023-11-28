function solve() {
  let textToTransform = document.querySelector('#text').value.toLowerCase();
  let command = document.querySelector('#naming-convention').value;
  let result = document.querySelector('#result');

  if(command === 'Camel Case'){
    let currentSentence = [];
    textToTransform = textToTransform.split(" ");
    currentSentence.push(textToTransform[0]);

    for (let index = 1; index < textToTransform.length; index++) {
      currentSentence.push(textToTransform[index].charAt(0).toUpperCase()+textToTransform[index].slice(1));
    }

    result.textContent = currentSentence.join('');
  } else if(command === 'Pascal Case') {
    let currentSentence = [];
    textToTransform = textToTransform.split(" ");

    for (let index = 0; index < textToTransform.length; index++) {
      currentSentence.push(textToTransform[index].charAt(0).toUpperCase()+textToTransform[index].slice(1));
    }

    result.textContent = currentSentence.join('');
  } else {
    result.textContent = 'Error!'
  }
}