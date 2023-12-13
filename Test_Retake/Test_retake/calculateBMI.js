function calculateBMI(weight,height) {
    return weight/(Math.pow((height/100),2))
}

function getBMImeaning(weight,height) {
    let CalBMI = calculateBMI(weight,height)
    let result
    switch (true) {
        case CalBMI > 25:
            result = "Overweight"
            break;
        case CalBMI > 18.5:
            result = "Normal weight"
            break;
        default :
        result = "Under weight"
            break;
    }
    return result
}

console.log(calculateBMI(65,172))
console.log(getBMImeaning(65,172))

