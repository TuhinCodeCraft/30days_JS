// Activity 1: (Template Literals)
// Task 1:
const name = `Tuhin`
const age = `20`
console.log(`Age of ${name} is ${age}`);

// Task 2:
const mulStr = `This is a\nMultiline String`
console.log(`The multiline string is: \n${mulStr}`);

// Activity 2: (Destructuring)
// Task 3:
const arr = [1,2,3,4,5]
const [ele1, ele2] = arr
console.log(`The first element is ${ele1} and the second element is ${ele2}`);

// Task 4:
const book = {
    title: 'Mind Set',
    author: 'John Doe'
}
const {title, author} = book
console.log(`The author of the ${title} book is ${author}`);

// Activity 2: (Destructuring)
// Task 5:
const newArr = [...arr, 6, 7, 8, 9, 10]
console.log(`The new array: ${newArr}`);

// Task 6:
const sum = (...args) => {
    let sum = 0
    for (const i of args) {
        sum += i
    }
    return sum
}
console.log(`Sum of first 5 elements: ${sum(1,2,3,4,5)}`);

// Activity 4: (Default Parameters)
// Task 7:
const product = (x, y=1) => {
    return x*y
}
console.log(`The product value of 5 and 1 is: ${product(5)}`);

// Activity 5: (Enhanced Object Literals)
// Task 8:
const legs = 4
const ears = 2
const bark = () => {
    console.log(`Dog is barking`);
}
const dog = {legs, ears, bark}
console.log(dog);

// Task 9:
const key1 = 'name'
const key2 = 'age'
const key3 = 'job'

const person = {
    [key1]: 'Tuhin',
    [key2]: 21,
    [key3]: 'dev'
}
console.log(person);