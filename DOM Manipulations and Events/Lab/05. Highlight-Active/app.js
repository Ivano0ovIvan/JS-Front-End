function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (const field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    };

    function onFocus(e) {
        const divParrentEl = e.currentTarget.parentNode;
        divParrentEl.classList.add('focused');
    };

    function onBlur(e) {
        const divParrentEl = e.currentTarget.parentNode;
        divParrentEl.classList.remove('focused');
    };
}