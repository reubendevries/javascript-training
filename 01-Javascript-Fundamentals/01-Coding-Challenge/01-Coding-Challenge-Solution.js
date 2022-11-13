function returnBMI(a, b, c, d){
    x = a / b ** 2
    y = c / d ** 2
    if (x > y) {
        return true
    } 
    return false
}

bmi_result = returnBMI(78, 1.69, 92, 1.95)
console.log(bmi_result)
bmi_result = returnBMI(95, 1.88, 85, 1.76)
console.log(bmi_result)