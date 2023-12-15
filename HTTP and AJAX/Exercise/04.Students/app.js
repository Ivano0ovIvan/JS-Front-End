async function attachEvents() {
  
  const baseURL = 'http://localhost:3030/jsonstore/collections/students';

  const tableBody = document.querySelector('tbody');
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', onLoad);

  const getRespons = await fetch(baseURL);
  const students = await getRespons.json();

  Object.values(students).forEach((student) => {

    rowCreator(student);

  });

  async function onLoad() {

    const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('#form input');

    let isValidPostRequest = firstName.value !== '' && lastName.value !== '' && facultyNumber.value !== '' && grade.value !== ''

    if (isValidPostRequest) {

      const newStudentInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value,
        grade: grade.value
      }

      await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newStudentInfo)
      })

      rowCreator(newStudentInfo);

      firstName.value !== '';
      lastName.value !== '';
      facultyNumber.value !== '';
      grade.value !== '';

    };
    
  };

  function rowCreator(student) {
    const row = document.createElement('tr')

    row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
    `;

    tableBody.appendChild(row)
  }

}

attachEvents();