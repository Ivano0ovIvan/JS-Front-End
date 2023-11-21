function meetings(stringArr) {
    let meetingsObj = {};

    for (const elem of stringArr) {
        const [day, name] = elem.split(" ");

        if (!meetingsObj.hasOwnProperty(day)) {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }else {
            console.log(`Conflict on ${day}!`)
        }
    }

    //Object.keys(meetingsObj).forEach((day) => {
    //    console.log(`${day} -> ${meetingsObj[day]}`)
    //})

    for (const day in meetingsObj) {
        console.log(`${day} -> ${meetingsObj[day]}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)