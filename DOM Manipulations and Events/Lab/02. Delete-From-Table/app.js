function deleteByEmail() {
    const inputElement = document.querySelector('input[name="email"]');
    const tableCells = Array.from(document.querySelectorAll('tbody tr'));
    const result = document.querySelector('#result')
    let isRemoved = false;

    for (const row of tableCells) {
        const emailCell = row.children[1];

        if (emailCell.textContent === inputElement.value) {
            row.remove();
            isRemoved = true;
        }
    }

    if (isRemoved) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}