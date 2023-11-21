function objectCreate(firstName, lastName, age) {
    let obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;

    return obj
}

console.log(objectCreate("Peter", 
"Pan",
"20"
));