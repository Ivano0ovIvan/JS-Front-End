function addItem() {

    const input = document.querySelector('#newItemText');
    const newListItem = document.createElement('li');
    const deleteLink = document.createElement('a');
    deleteLink.href = '#'
    deleteLink.textContent = '[Delete]';
    newListItem.textContent = input.value;

    const ul = document.querySelector('#items');
    ul.appendChild(newListItem);
    input.value = '';
    newListItem.appendChild(deleteLink);

    deleteLink.addEventListener('click', deleteItem);

    function deleteItem(e) {
        const row = e.currentTarget.parentNode;
        row.remove()
    }

}