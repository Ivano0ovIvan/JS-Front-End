function vacantionCalculator(groupOfPeople, typeOfGroup, dayOfWeek) {
    let currentPrice = 0;
    if (typeOfGroup === "Students") {
        if (dayOfWeek === 'Friday') {
            currentPrice = groupOfPeople * 8.45
        } else if (dayOfWeek === 'Saturday') {
            currentPrice = groupOfPeople * 9.80
        } else if (dayOfWeek === "Sunday") {
            currentPrice = groupOfPeople * 10.46
        }

        if (groupOfPeople >= 30) {
            currentPrice *= 0.85
        }
    } else if (typeOfGroup === "Business") {
        let priceForATicket = 0
        if (dayOfWeek === 'Friday') {
            priceForATicket = 10.90
            currentPrice = groupOfPeople * priceForATicket
        } else if (dayOfWeek === 'Saturday') {
            priceForATicket = 15.60
            currentPrice = groupOfPeople * priceForATicket
        } else if (dayOfWeek === "Sunday") {
            priceForATicket = 16
            currentPrice = groupOfPeople * priceForATicket
        }

        if (groupOfPeople >= 100) {
            currentPrice -= 10 * priceForATicket
        }
    } else if (typeOfGroup === "Regular") {
        if (dayOfWeek === 'Friday') {
            currentPrice = groupOfPeople * 15
        } else if (dayOfWeek === 'Saturday') {
            currentPrice = groupOfPeople * 20
        } else if (dayOfWeek === "Sunday") {
            currentPrice = groupOfPeople * 22.50
        }

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            currentPrice *= 0.95
        }
    }
    console.log(`Total price: ${currentPrice.toFixed(2)}`)
}

vacantionCalculator(40,
    "Regular",
    "Saturday"
    )