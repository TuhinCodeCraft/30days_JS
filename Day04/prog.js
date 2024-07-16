// Activity 1: (For Loop)
// Task 1:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2:
for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5*i}`);
}

// Activity 2: (While Loop)
// Task 3:
let sum = 0
let i = 1
while (i<=10) {
    sum += i
    i++
}
console.log(`Sum of 1 to 10 is ${sum}`);

// Task 4:
let num = 10
while (num>=1) {
    console.log(num);
    num--
}

// Activity 3: (Do-While Loop)
// Task 5:
let n = 1
do {
    console.log(n);
    n++
} while (n<=5);

// Task 6:
const x = 5
let iter = 1
let fac = 1
do {
    fac *= iter
    iter++
} while (iter<=x);
console.log(`Factorial of ${x} is ${fac}`);

// Activity 4: (Nested Loop)
// Task 7:
let str = ''
for (let i = 1; i <= 5; i++) {
    str = ''
    for (let j = 1; j <= i; j++) {
        str += '*'
    }
    console.log(str);
}

// Activity 5: (Loop Control Statements)
// Task 8:
for (let i = 1; i <= 10; i++) {
    if(i==5) continue
    console.log(i);
}

// Task 9:
for (let i = 1; i <= 10; i++) {
    if(i==7) break
    console.log(i);
}