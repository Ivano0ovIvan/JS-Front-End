function addItem() {
    const ul = document.querySelector('#items');
    const input = document.querySelector('#newItemText');
    const newListItem = document.createElement('li');
    newListItem.textContent = input.value;
    ul.appendChild(newListItem);
    input.value = '';
}