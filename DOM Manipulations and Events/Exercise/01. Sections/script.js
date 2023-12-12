function create(words) {
   let mainContainer = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none'

      div.appendChild(paragraph);
      mainContainer.appendChild(div);

      div.addEventListener('click', ()=>{
         paragraph.style.display = '';
      })

   };

}