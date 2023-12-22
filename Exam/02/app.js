window.addEventListener("load", solve);

function solve() {
    const expenseTypeInputEl = document.getElementById('expense');
    const amountInputEl = document.getElementById('amount');
    const dateInputEl = document.getElementById('date');

    const addButtonEl = document.getElementById('add-btn');
    const deleteButton = document.querySelector('#expenses button')

    const formElement = document.querySelector('.expense-content');

    addButtonEl.addEventListener('click', addExpense);

    function addExpense() {

        let isInvalidInput = expenseTypeInputEl.value === '' || amountInputEl.value === '' || dateInputEl.value === '';

        if (isInvalidInput) {
            return
        };

        let previewList = document.getElementById('preview-list');
        let expensesList = document.getElementById('expenses-list');
        
        let li = document.createElement('li');
        li.className = 'expense-item';
        let article = document.createElement('article');

        let typeParagraph = document.createElement('p');
        let typeValue = expenseTypeInputEl.value;
        typeParagraph.textContent = `Type: ${typeValue}`;

        let amountParagraph = document.createElement('p');
        let amountValue = amountInputEl.value;
        amountParagraph.textContent = `Amount: ${amountValue}$`;

        let dateParagraph = document.createElement('p');
        let dateValue = dateInputEl.value;
        dateParagraph.textContent = `Date: ${dateValue}`;

        article.appendChild(typeParagraph);
        article.appendChild(amountParagraph);
        article.appendChild(dateParagraph);

        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        let editButton = document.createElement('button');
        editButton.classList.add('btn');
        editButton.classList.add('edit');
        editButton.textContent = 'edit';
        editButton.addEventListener('click', edit);

        let okButton = document.createElement('button');
        okButton.classList.add('btn');
        okButton.classList.add('ok');
        okButton.textContent = 'ok';
        okButton.addEventListener('click', addToExpenses)

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(okButton);

        li.appendChild(article);
        li.appendChild(buttonsDiv);
        previewList.appendChild(li);

        addButtonEl.disabled = true;
        formElement.reset();

        function edit() {
            expenseTypeInputEl.value = typeValue;
            amountInputEl.value = amountValue;
            dateInputEl.value = dateValue;

            addButtonEl.disabled = false;

            previewList.removeChild(li);
        };

        function addToExpenses() {
            previewList.removeChild(li);
            li.removeChild(buttonsDiv);
            expensesList.appendChild(li);
      
            addButtonEl.disabled = false;
      
            deleteButton.addEventListener('click', () => {
              location.reload();
            });
          };
    };

}