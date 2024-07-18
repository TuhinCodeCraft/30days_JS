// Activity 1: (Array Creation and Access)
// Task 1:
const arr = [1,2,3,4,5]
console.log(arr);

// Task 2:
console.log(`The first element of the array is: ${arr[0]}`);
console.log(`The last element of the array is: ${arr[arr.length-1]}`);

// Activity 2: (Array Methods(Basic))
// Task 3:
arr.push(100)
console.log(`After using push: ${arr}`);
// Task 4:
arr.pop()
console.log(`After using pop: ${arr}`);
// Task 5:
arr.shift()
console.log(`After using shift: ${arr}`);
// Task 6:
arr.unshift(10)
console.log(`After using unshift: ${arr}`);

// Activity 3: (Array Methods(intermediate))
// Task 7:
const doubledArr = arr.map(element => element*2)
console.log(`The new array where each element is doubled using map: ${doubledArr}`);

// Task 8:
const evenArray = arr.filter(ele => ele%2===0)
console.log(`The new array where each element is even after using filter: ${evenArray}`);

// Task 9:
const arrSum = arr.reduce((acc, curr) => acc+curr, 0)
console.log(`The sum of the array elements after using reduce: ${arrSum}`);

// Activity 4: (Array Iteration)
// Task 10: (using for loop)
console.log("Array elements by for loop");
for (let i = 0; i < arr.length; i++) {
    console.log(`Element at index ${i} is ${arr[i]}`);
}

// Task 11: (using for each method)
console.log("Array elements by for-each");
arr.forEach((element) => {
    console.log(element);
})

// Activity 5: (Multidimensional Array)
// Task 12:
console.log("***** Multidimensional Array *****");
const subArr1 = [1,2,3]
const subArr2 = [4,5,6]
const arr2 = [subArr1, subArr2]
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
        console.log(arr2[i][j]);
    }
}

// Task 13:
console.log(`Acessing the first element of the seond array: ${arr2[1][0]}`);