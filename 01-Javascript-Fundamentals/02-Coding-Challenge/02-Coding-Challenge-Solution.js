function returnBMI(a, b, c, d){
    x = a / b ** 2
    y = c / d ** 2
    if (x > y) {
        return `Mark's BMI (${x.toFixed(2)}) is higher than John's (${y.toFixed(2)})!`
    } 
    return `John's BMI (${y.toFixed(2)}) is higher than Mark's (${x.toFixed(2)})!`
}

bmi_result = returnBMI(78, 1.69, 92, 1.95)
console.log(bmi_result)
bmi_result = returnBMI(95, 1.88, 85, 1.76)
console.log(bmi_result)