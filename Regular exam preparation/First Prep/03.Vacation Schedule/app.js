const baseURL = 'http://localhost:3030/jsonstore/tasks/'

const loadVacantionButton = document.getElementById('load-vacations');
const vacantionList = document.getElementById('list');

const nameInput = document.getElementById('name');
const numDaysInput = document.getElementById('num-days');
const formDateInput = document.getElementById('from-date');
const formAddButtonElement = document.getElementById('add-vacation');
const formEditButtonElement = document.getElementById('edit-vacation');

const formElement = document.querySelector('#form form');

loadVacantionButton.addEventListener('click', loadVacations);

formAddButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

    const newVAcantion = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: formDateInput.value
    }

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVAcantion)
    })
        .then(loadVacations)
    
    clearForm()
});

formEditButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    const vacantionId = formElement.dataset.vacation;
    const vacationData = {
        _id: vacantionId,
        name: nameInput.value,
        days: numDaysInput.value,
        date: formDateInput.value
    };
    console.log(vacationData)
    fetch(`${baseURL}${vacantionId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(vacationData)
    })
        .then(loadVacations)
        .then(() => {
            formEditButtonElement.setAttribute('disabled', 'disabled');

            formAddButtonElement.removeAttribute('disabled');

            delete formElement.dataset.vacation;

            clearForm();
        })

    
})

function clearForm() {
    nameInput.value = '';
    numDaysInput.value = '';
    formDateInput.value = '';
};

function loadVacations() {
    return fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            renderVacations(Object.values(result));
        })
};

function renderVacations(vacations) {
    vacantionList.innerHTML = '';

    vacations.map(renderVacation).forEach(vacationElement => {
        vacantionList.appendChild(vacationElement);
    });
};

function renderVacation(vacation) {
    const container = document.createElement('div');
    container.className = 'container';

    const h2Element = document.createElement('h2');
    h2Element.textContent = vacation.name;

    const h3DateElement = document.createElement('h3');
    h3DateElement.textContent = vacation.date;

    const h3DaysElement = document.createElement('h3');
    h3DaysElement.textContent = vacation.days;

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => {
        nameInput.value = vacation.name;
        numDaysInput.value = vacation.days;
        formDateInput.value = vacation.date;

        container.remove();

        formAddButtonElement.setAttribute('disabled', 'disabled');

        formEditButtonElement.removeAttribute('disabled');

        formElement.dataset.vacation = vacation._id;
    })

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = 'Done';

    container.appendChild(h2Element);
    container.appendChild(h3DateElement);
    container.appendChild(h3DaysElement);
    container.appendChild(changeBtn);
    container.appendChild(doneBtn);

    

    return container
};