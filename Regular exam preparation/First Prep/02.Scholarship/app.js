window.addEventListener("load", solve);

function solve() {
  const candidatesListElement = document.getElementById('candidates-list')
  const previewListElement = document.getElementById('preview-list')
  const studentInputElement = document.getElementById('student');
  const universityInputElement = document.getElementById('university');
  const scoreInputElement = document.getElementById('score');
  const nextButtonElement = document.getElementById('next-btn');

  nextButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    let formIsEmpty = studentInputElement.value === '' || universityInputElement.value === '' || scoreInputElement.value === '';
    if (formIsEmpty) {
      return
    }

    const liElement = document.createElement('li');
    liElement.className = 'application';

    const articleElement = document.createElement('article');
    
    const articleHeaderElement = document.createElement('h4');
    articleHeaderElement.textContent = studentInputElement.value;

    const universityParagraphElement = document.createElement('p');
    universityParagraphElement.textContent = `University: ${universityInputElement.value}`;

    const scoreParagraphElement = document.createElement('p');
    scoreParagraphElement.textContent = `Score: ${scoreInputElement.value}`;

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('action-btn');
    editButtonElement.classList.add('edit');
    editButtonElement.textContent = 'edit';

    const applyButtonElement = document.createElement('button');
    applyButtonElement.classList.add('action-btn');
    applyButtonElement.classList.add('apply');
    applyButtonElement.textContent = 'apply';

    articleElement.appendChild(articleHeaderElement);
    articleElement.appendChild(universityParagraphElement);
    articleElement.appendChild(scoreParagraphElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(applyButtonElement);

    previewListElement.appendChild(liElement);

    studentInputElement.value = '';
    universityInputElement.value = '';
    scoreInputElement.value = '';
    nextButtonElement.setAttribute('disabled', true);

    editButtonElement.addEventListener('click', () => {
      const studentName = previewListElement.querySelector('h4').textContent;
      const paragraphElements = Array.from(previewListElement.querySelectorAll('article p'));
      const [universityName, score] = paragraphElements;

      studentInputElement.value = studentName;
      universityInputElement.value = universityName.textContent.split(': ')[1]
      scoreInputElement.value =  score.textContent.split(': ')[1]

      previewListElement.innerHTML = '';

      nextButtonElement.removeAttribute('disabled');
    });

    applyButtonElement.addEventListener('click', () => {

      editButtonElement.remove();
      applyButtonElement.remove();

      candidatesListElement.appendChild(liElement)

      previewListElement.innerHTML = '';

      nextButtonElement.removeAttribute('disabled');
    });
  });

}
