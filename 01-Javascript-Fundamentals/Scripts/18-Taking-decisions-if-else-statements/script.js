let person = 'Sarah';
let age = 19;

function oldEnough(a, b) {
    if (a > 18) {
        result =`${b} can legally take their driver's learning program!`
    } else {
        result = `${b} can't legally take their driver's learning program!`
    } return result
}

let answer = oldEnough(age, person);
console.log(answer);

person = 'Mark';
age = 12;

answer = oldEnough(age, person);
console.log(answer);

let century;

function centuryBorn(a) {
    if (a <= 2000) {
        century = 20;
    } else {
        century = 21;
    }
    return century
}

result = centuryBorn(2001)

console.log(`was born in the ${result}th century`);

result = centuryBorn(1981)

console.log(`was born in the ${result}th century`)