// Activity 1: (Function Declaration)
// Task 1:
function even_odd(num){
    if(num%2===0) console.log(`${num} is even`);
    else console.log(`${num} is odd`);
}
even_odd(5)

// Task 2:
function square(num){
    return num**2
}
console.log(square(5));

// Activity 2: (Function Expression)
// Task 3:
((num1, num2) => {
    if (num1>num2) console.log(`${num1} is greater`);
    else console.log(`${num2} is greater`);
})(3,4);

// Task 4:
let res = ((str1, str2) => {
    return str1+str2
})("Tuhin", " Ghosh");
console.log(`Concatenated String is: ${res}`);

// Activity 3: (Arrow Functions)
// Task 5:
const sum = (a, b) => {
    return a+b
}
console.log(`Sum of 3 and 4 is: ${sum(3,4)}`);

// Task 6:
const isContainWhiteSpace = (str) => {
    return str.includes(' ')
}
console.log(isContainWhiteSpace('Tuhin Ghosh'));

// Activity 4: (Function Parameter and default values)
// Task 7:
const product = (x, y=5) => x*y
console.log(product(3));

// Task 8:
const greet = (name, age=20) => `Hello ${name}, Congratulations you completed ${age}`
console.log(greet('Anushka'));

// Activity 5: (Higher Order Function)
// Task 9:
const greeting = () => {
    console.log(`Welcome to JS Challenge`);
}
const multiGreet = (fn, num) => {
    for(let i = 1; i <= num; i++){
        fn()
    }
}
multiGreet(greeting, 5)

// Task 10:
const Square = (num) => {
    return num**2
}
const Cube = (num) => {
    return num**3
}
const combineFunc = (func1, func2, num) => {
    num = func1(num)
    num = func2(num)
    console.log(`Final Answer: ${num}`);
}
combineFunc(Square, Cube, 2)