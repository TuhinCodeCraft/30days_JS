// Activity 1: (Understanding promises)
// Task 1:
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is the message`)
    }, 2000)
}).then((e) => {
    console.log(`The resolved msg is: ${e}`);
})

// Task 2:
const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(`This is reject message`)
    }, 2000)
}).catch((e)=>{
    console.log(`The reject msg is: ${e}`);
})

// Activity 2: (Chaining promises)
// Task 3:
let num = Math.floor(Math.random()*10 + 1)
function fetchData(url, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(num>5)
                resolve(`Data fetched Successfully from: ${url}`)
            else 
                reject(`Error occurred while data fetching`)
        }, time)
    })
}
function sequenceFetchData(){
    fetchData('https://jsonplaceholder.typicode.com/users', 1000)
    .then((res) => {
        console.log(`Data fecthed 1`);
        return fetchData('https://jsonplaceholder.typicode.com/users', 1000)
    })
    .then((res) => {
        console.log(`Data fecthed 2`);
        return fetchData('https://jsonplaceholder.typicode.com/users', 1000)
    })
    .then((res) => {
        console.log(`Data fecthed 3`);
        return fetchData('https://jsonplaceholder.typicode.com/users', 1000)
    })
    .catch((err) => {
        console.log(`Data Fetching Error: ${err}`);
    })
    .finally(()=>{
        console.log(`All data fetched Successfully`);
    })
}
sequenceFetchData()

// Activity 3: (Using async/await)
// Task 4:
async function resolveReturn(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(500)
        }, 3000)
    })
}
async function print(){
    let val = await resolveReturn()
    console.log(val);
}
print()

// Task 5:
async function rejectReturn(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(`Error detected`)
        }, 3000)
    })
}
async function printRej(){
    try {
        let val = await rejectReturn()
        console.log(val);
    } catch (error) {
        console.log(`This is error: ${error}`);
    }
}
printRej()

// Activity 4: (Fetching data from an api)
// Task 6:
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((data) => {
    console.log(data[0].address.city);
})
.catch((err) => {
    console.log(`Error: ${err}`);
})

// Task 7:
async function fetchAPI(){
    return await fetch('https://jsonplaceholder.typicode.com/users')
}
fetchAPI()
.then(res => res.json())
.then((data)=>{
    console.log(`Email: ${data[0].email}`);
})
.catch((err) => {
    console.log(`Error: ${err}`);
})

// Activity 5: (Concurrent promises)
// Task 8:
const promise1 = new Promise(()=>{
    setTimeout(()=>{
        console.log(`Promise 1 executed`);
    }, 1000)
})
const promise2 = new Promise(()=>{
    setTimeout(()=>{
        console.log(`Promise 2 executed`);
    }, 1000)
})
const promise3 = new Promise(()=>{
    setTimeout(()=>{
        console.log(`Promise 3 executed`);
    }, 1000)
})
const promInstance = Promise.all([promise1, promise2, promise3])
console.log(promInstance);

// Task 9:
function sleep(){
    return new Promise((reslove, reject)=>{
        reslove(500)
    })
}
async function slowSleep(){
    return new Promise((reslove, reject)=>{
        reslove(700)
    })
}
const prom1 = sleep()
const prom2 = slowSleep()
Promise.race([prom1, prom2])
.then((value)=>{
    if(value === 500) console.log(`prom1 is fast`);
    if(value === 700) console.log(`prom2 is fast`);
})