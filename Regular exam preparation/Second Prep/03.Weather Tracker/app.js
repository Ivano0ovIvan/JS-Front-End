function weatherTracker() {

    const baseURL = 'http://localhost:3030/jsonstore/tasks/';
    
    const createElement = (tag, content = '', classes = [], id = '', listener = '') => {

        const element = document.createElement(tag);

        if (content) {
            element.textContent = content;
        }

        if (classes.length) {
            element.classList.add(...classes);
        }

        if (id) {
            element.id = id;
        }

        if (listener) {
            element.addEventListener('click', listener);
        }

        return element;
    };

    const btnHandler = (e) => {
        const operations = {
            "Add Weather": addWeather,
            "Edit Weather": editWeather,
            "Load History": loadHistory,
            "Change": changeWeather,
            "Delete": deleteWeather
        }

        operations[e.target.textContent](e);
    }

    

    const changeWeather = (e) => {

        const mainDiv = e.target.parentElement.parentElement;
        editId = mainDiv.id;

        const location = mainDiv.querySelector('h2').textContent;
        const [date, temperature] = mainDiv.querySelectorAll('h3');

        fields.location.value = location;
        fields.date.value = date.textContent;
        fields.temperature.value = temperature.textContent;

        editWeatherBtn.disabled = false;
        addWeatherBtn.disabled = true;

        mainDiv.remove();

    }

    const deleteWeather = (e) => {
        editId = e.target.parentElement.parentElement.id;

        fetch(`${baseURL}${editId}`, {
            method: 'DELETE'
        })
            .then(() => {
                loadHistory()
            })

    }

    const addWeather = (e) => {
        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(createNewWeather())
        })
            .then(() => {

            })
    }

    const editWeather = (e) => {
        fetch(`${baseURL}${editId}`, {
            method: "PUT",
            body: JSON.stringify(createNewWeather())
        })
            .then(() => {
                editWeatherBtn.disabled = true;
                addWeatherBtn.disabled = false;
            })
    }

    const loadHistory = (e) => {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                listContainer.innerHTML = '';
                Object.values(data).forEach(item => {
                    const containerDiv = createElement('div', '', ['container'], id=item._id);

                    containerDiv.appendChild(createElement('h2', item.location));
                    containerDiv.appendChild(createElement('h3', item.data));
                    containerDiv.appendChild(createElement('h3', item.temperature, [], 'celsius'));

                    const btnsContainer = createElement('div', '', ["buttons-container"]);
                    btnsContainer.appendChild(createElement('button', 'Change', ['change-btn'], '', btnHandler));
                    btnsContainer.appendChild(createElement('button', 'Delete', ['change-btn'], '', btnHandler));

                    containerDiv.appendChild(btnsContainer);
                    listContainer.appendChild(containerDiv);
                })
            })
    }

    const createNewWeather = () => {
        const newWeather = {};

        for (const [key, value] of Object.entries(fields)) {
            newWeather[key] = value.value
        }
    }

    let editId = '';

    const fields = {
        location: document.getElementById('location'),
        temperature: document.getElementById('temperature'),
        date: document.getElementById('date')
    };

    const loadBtn = document.getElementById('load-history');
    loadBtn.addEventListener('click', btnHandler);

    const addWeatherBtn = document.getElementById('add-weather');
    addWeatherBtn.addEventListener('click', btnHandler);

    const editWeatherBtn = document.getElementById('edit-weather');
    editWeatherBtn.addEventListener('click', btnHandler);

    const listContainer = document.getElementById('list');



}

weatherTracker()