const baseURL = 'http://localhost:3030/jsonstore/tasks/';

const loadMealsButton = document.getElementById('load-meals');
const mealsListElement = document.getElementById('list');

const formElement = document.querySelector('#form form');
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');
const addMealButton = document.getElementById('add-meal');
const editMealButton = document.getElementById('edit-meal');

loadMealsButton.addEventListener('click', loadMeals);

addMealButton.addEventListener('click', (e) => {
    e.preventDefault();

    //form fields validation

    const newMeal = {
        food: foodInputElement.value,
        time: timeInputElement.value,
        calories: caloriesInputElement.value
    }

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMeal)
    })
        .then(loadMeals)
    
    formElement.reset();
});

editMealButton.addEventListener('click', (e) => {
    e.preventDefault();
    const mealId = formElement.dataset.meal;
    const mealData = {
        _id: mealId,
        food: foodInputElement.value,
        time: timeInputElement.value,
        calories: caloriesInputElement.value
    };

    fetch(`${baseURL}${mealId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(mealData)
    })
        .then(loadMeals)
        .then(() => {
            addMealButton.disabled = true;

            editMealButton.disabled = false;

            delete formElement.dataset.meal;

            formElement.reset();
        })
})

function loadMeals() {

    return fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            addMeals(Object.values(result))
        });
};

function addMeals(meals) {
    mealsListElement.innerHTML = '';

    meals.map(createMeal).forEach(mealDivElement => {
        mealsListElement.appendChild(mealDivElement);
    });
};

function createMeal(meal) {
    const container = document.createElement('div');
    container.className = 'meal';

    const h2Element = document.createElement('h2');
    h2Element.textContent = meal.food;

    const h3TimeElement = document.createElement('h3');
    h3TimeElement.textContent = meal.time;

    const h3CaloriesElement = document.createElement('h3');
    h3CaloriesElement.textContent = meal.calories;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'meal-buttons'

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-meal';
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => {
        foodInputElement.value = meal.food;
        timeInputElement.value = meal.time;
        caloriesInputElement.value = meal.calories;

        container.remove();

        addMealButton.disabled = true

        editMealButton.disabled = false

        formElement.dataset.meal = meal._id;
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-meal';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        fetch(`${baseURL}${meal._id}`, {
            method: 'DELETE'
        })
            .then(() => {
                loadMeals()
            })
    })


    buttonsDiv.appendChild(changeBtn);
    buttonsDiv.appendChild(deleteBtn);

    container.appendChild(h2Element);
    container.appendChild(h3TimeElement);
    container.appendChild(h3CaloriesElement);
    container.appendChild(buttonsDiv);
    

    return container;
};