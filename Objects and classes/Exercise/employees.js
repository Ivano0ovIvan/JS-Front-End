function employees(personArr)  {
    let employeeArr = [];

    class Employee {
        constructor(employeeName) {
            this.employeeName = employeeName;
            this.personalNum = this.employeeName.length;
        }
    }

    personArr.forEach(employee => {
        employeeArr.push(new Employee(employee))
    });

    employeeArr.forEach(employee =>{
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`);
    })
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )