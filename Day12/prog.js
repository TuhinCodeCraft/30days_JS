// Activity 1: (Basic Error Handling with Try-Catch)
// Task 1:
const checkRange = (num) => {
  throw new RangeError(`Number is too high`);
};
try {
  checkRange(50000000000);
} catch (error) {
  console.log(`Function execution failed: ${error}`);
}

// Task 2:
const divideTwoNums = (num1, num2) => {
  console.log(num1 / num2);
  throw new Error(`Division happend incorrect`);
};
try {
  divideTwoNums(6, 0);
} catch (error) {
  console.log(`Error: ${error}`);
}

// Activity 2: (Finally Block)
// Task 3:
let num = 1;
try {
  console.log(num.toUpperCase());
} catch (error) {
  console.log(`This is not possible: ${error}`);
} finally {
  console.log(`Process Finished`);
}

// Activity 3: (Custom Error Objects)
// Task 4:
class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}
try {
  throw new CustomError("This is a custom error");
} catch (error) {
  console.log(`Error: ${error}`);
}

// Task 5:
let str = ""
function validate(){
    try {
        if(!str)
            throw new Error(`This string is empty`)
    } catch (error) {
        console.log(`Problem: ${error}`);
    }
}
validate()

// Activity 4: (Error Handling in Promises)
// Task 6:
let val = Math.floor(Math.random()*10 + 1) 
const newpromise = new Promise((resolve, reject)=>{
    if(val>5) resolve(`Resolved by the promise`)
    else reject(`Rejected by the promise`)
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// Task 7:
const executedResult = async () => {
    return new Promise((resolve, reject) => {
        try {
            if(val>5) resolve(`Resolved by the promise`)
            else reject(`Rejected by the promise`)
        } catch (error) {
           console.log(`An error occurred: ${error}`); 
        }
    })
}
executedResult()
.then((res) => {console.log(res);})
.catch((err) => {console.log(err);})

// Activity 5: (Graceful Error Handling in Fetch)
// Task 8:
fetch('https://api.github.co/users/TuhinCodeCraft')
.then(res => res.json())
.then((data) => {
    console.log(`Name: ${data.name}`);
}).catch((err) => {
    console.log(`ERROR: ${err}`);
})

// Task 9:
const fetchData = async () => {
    try {
        fetch('https://api.github.co/users/TuhinCodeCraft')
    } catch (error) {
        console.log(`ERROR: Failed to fetch the github data`);
    }
}
fetchData()
.then(res => res.json())
.then((data) => {
    console.log(`Name: ${data.name}`);
}).catch((err) => {
    console.log(`ERROR OCCURRED`);
})