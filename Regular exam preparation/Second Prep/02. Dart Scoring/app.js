window.addEventListener("load", solve);

function solve() {

  let playerNameInput = document.getElementById('player');
  let playerScore = document.getElementById('score');
  let round = document.getElementById('round');

  let publishBtn = document.getElementById('add-btn');
  let clearBtn = document.querySelector('.clear')

  let formElement = document.querySelector('form');

  publishBtn.addEventListener('click', publish);

  function publish() {

    let isValidInput = playerNameInput.value === '' || playerScore.value === '' || round.value === '';

    if (isValidInput) {
      return
    };

    let reviewList = document.getElementById('sure-list');
    let publishedList = document.getElementById('scoreboard-list');

    let li = document.createElement('li');
    li.className = 'dart-item';

    let articleElement = document.createElement('article');

    let nameParagraph = document.createElement('p');
    let nameValue = playerNameInput.value;
    nameParagraph.textContent = nameValue;

    let scoreParagraph = document.createElement('p');
    let scoreValue = playerScore.value;
    scoreParagraph.textContent = `Score: ${scoreValue}`;

    let roundParagraph = document.createElement('p');
    let roundValue = round.value
    roundParagraph.textContent = `Round: ${roundValue}`;

    articleElement.appendChild(nameParagraph);
    articleElement.appendChild(scoreParagraph);
    articleElement.appendChild(roundParagraph);

    let editBtn = document.createElement('button');
    editBtn.classList.add('btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'edit';
    editBtn.addEventListener('click', edit);

    let postBtn = document.createElement('button');
    postBtn.classList.add('btn');
    postBtn.classList.add('ok');
    postBtn.textContent = 'ok';
    postBtn.addEventListener('click', post);

    li.appendChild(articleElement);
    li.appendChild(editBtn);
    li.appendChild(postBtn);

    reviewList.appendChild(li);

    publishBtn.disabled = true;

    formElement.reset();

    function edit() {
      playerNameInput.value = nameValue;
      playerScore.value = scoreValue;
      round.value = roundValue;

      publishBtn.disabled = false;

      reviewList.removeChild(li);
    };

    function post() {
      reviewList.removeChild(li);
      li.removeChild(postBtn);
      li.removeChild(editBtn);
      publishedList.appendChild(li);
      publishBtn.disabled = false;

      clearBtn.addEventListener('click', () => {
        location.reload();
      })
    }
  };

}
  