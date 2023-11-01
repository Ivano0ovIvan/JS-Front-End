function fruitCalculator(fruit, weightInGrams, pricePerKilo) {
    let totalPrice = (pricePerKilo * (weightInGrams / 1000)).toFixed(2)
    console.log(`I need $${totalPrice} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`)
}

fruitCalculator('apple', 1563, 2.35)