// Activity 1: Understanding Closures
// Task 1
function outer(){
    let val = 50
    function inner(){
        console.log(`Value of the variable val: ${val}`);
    }
    return inner
}
const inner = outer()
inner()

// Task 2:
function maintainCounter(){
    let counter = 10
    function getCounter(){
        console.log(`Here is the value for counter: ${counter++}`);
    }
    return getCounter
}
let myfunc = maintainCounter()
myfunc()

// Activity 2: Practical Closures
// Task 3:
function generateId(){
    let id = Date.now()
    function getId(){
        console.log(`ID: ${++id}`);
    }
    return getId
}
let myId = generateId()
myId()
myId()
myId()
myId()

// Task 4:
function getUser(username){
    function greetUser(){
        console.log(`Hello ${username}`);
    }
    return greetUser
}
let greetMe = getUser("Tuhin")
greetMe()

// Activity 3: Closures in Loops
// Task 5:
function getIndex(index){
    function printIndex(){
        console.log(`Value of index is: ${index}`);
    }
    return printIndex
}
for (let i = 0; i < 5; i++) {
    let printInd = getIndex(i)
    printInd()
}

// Activity 4: Module Pattern
// Task 6:
const itemManager = (function(){
    let items = []
    return {
        addItem: function(item){
            items.push(item)
        },
        removeItem: function(item){
            const ind = items.indexOf(item)
            if(ind<0 || ind>items.length)
                console.log(`Enter a valid index`);
            else{
                items.splice(ind, 1)
                console.log(`${item} is deleted`);
            }
        },
        listItem: function(){
            items.forEach((element, index) => {
                console.log(`Element at index ${index} is ${element}`);
            })
        }
    }
})();
itemManager.addItem("Apple")
itemManager.addItem("Lemon")
itemManager.addItem("Orange")
itemManager.listItem()
itemManager.removeItem("Lemon")
itemManager.listItem()

// Activity 5: Memoization
// Task 7:
function memoize(fn) {
    const cache = {};
    return function(arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}
function slowFunction(num) {
    for (let i = 0; i < 1e6; i++) {}
    return num * 2;
}
const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(10)); 
console.log(memoizedSlowFunction(15)); 

// Task 8:
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(7)); 
console.log(memoizedFactorial(4)); 
console.log(memoizedFactorial(10)); 
