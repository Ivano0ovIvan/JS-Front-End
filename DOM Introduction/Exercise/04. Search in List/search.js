function search() {
   
   let listItems = Array.from(document.querySelectorAll('li'));
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matchesCount = 0;

   for (const li of listItems) {
      li.style.fontWeight = '';
      li.style.textDecoration = '';
   }

   for (const li of listItems) {
      if(li.textContent.includes(searchText)){
         matchesCount++;
         li.style.fontWeight = 'bold'
         li.style.textDecoration = 'underline'
      }
   }

   result.textContent = `${matchesCount} matches found`

}
