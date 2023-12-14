function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', getAllPhones);
    document.getElementById('btnCreate').addEventListener('click', createNewContact);
    const baseURL = 'http://localhost:3030/jsonstore/phonebook'

    async function getAllPhones() {

        const phoneInfo = await (await fetch(baseURL)).json();
        
        const phoneBook = document.getElementById('phonebook');

        Object.values(phoneInfo).forEach((contact) => {
            const li = document.createElement('li');
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';

            li.textContent = `${contact.person}: ${contact.phone}`;
            li.appendChild(delBtn);
            phoneBook.appendChild(li);

            delBtn.addEventListener('click', deleteContact);

            function deleteContact() {
                
                const id = contact._id;

                fetch(`http://localhost:3030/jsonstore/phonebook/${id}`,{
                    method: 'DELETE',
                });

                li.remove();
            }

        });

    };

    function createNewContact() {
        
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;
  
        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({
                person,
                phone
            })
        })
        .then((response)=> response.json())
        .then(()=> {
            getAllPhones();
            document.getElementById('person').value = '';
            document.getElementById('phone').value = '';
        })

    };
}

attachEvents();