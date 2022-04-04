// Question 1 (a, b ,c)

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let zero = 0;
let subtract = ages[ages.length - 1] - ages[zero];
console.log(subtract);


ages.push(44);
let subtract1 = ages[ages.length - 1] - ages[zero];
console.log(subtract1);

console.log(ages);

let sum = 0;

function average(array) {
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum / ages.length;
}
console.log(average(ages));


// Question 2 (a, b)

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

let lengths = names.map(n => n.length);
let sum1 = 0;
lengths.forEach(function(num) { sum1 += num });
average = sum1 / lengths.length;
console.log(average);


function flatten(arr) {
    var flat = [];
    for (var i = 0; i < names.length; i++) {
        flat = flat.concat(names[i]);
    }
    return flat;
}
console.log(flatten(names));

// Question 5 & 6
let nameLengths = [5, 3, 4];
for (let i = 0; i < nameLengths.length; i++) {
    console.log(i);
    console.log(names[i]);

}

// Question 7
function repeatString(word, n) {
    let repeatedString = "";
    while (n > 0) {
        repeatedString += word;
        n--;
    }
    return repeatedString;
}
console.log(repeatString("Hello", 3))
repeatString("Hello", 3);

// Question 8
let firstName = "Derek ";
let lastName = "Manning";
let wholeName = firstName + lastName;

function fullName(f, l) {
    return wholeName;
}
console.log(fullName(wholeName))
fullName();

// Question 9
let array1 = [25, 25, 25, 25];
let initialValue = 0;
let totalSum = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

function numbers(n) {
    if (n > totalSum) {
        return true;
    } else {
        return false;
    }
}
console.log(numbers(101))
numbers();

// Question 10
let setNumbers = [23, 452, 54, 99, 1, 293]
let sum2 = 0;
let average1;

function ofNumbers() {
    setNumbers.forEach(function(num) { sum2 += num });
    return average1 = sum2 / setNumbers.length;
}
console.log(ofNumbers(average1));
ofNumbers();

// Question 11 
function twoArrays() {
    if (average1 > average) { //average = names and average1 = setNumbers
        return true;
    } else {
        return false
    }
}
console.log(twoArrays());
twoArrays();

// Question 12
let moneyInPocket;
let isHotOutside = true;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == 'yes' && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink('yes', 9.50))
willBuyDrink();

// Question 13
let ofAge = 21;

function canDrink(a) {

    if (a < ofAge) {
        return 'You are ' + a + ' and too young to drink!';
    } else {
        return 'You are ' + a + ' and allowed to drink!';
    }
}
canDrink();
console.log(canDrink(17));