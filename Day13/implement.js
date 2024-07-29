import { twoSum } from "./Task1.js"
twoSum(4,5)

import { person } from "./Task2.js"
console.log(person.name);
console.log(person.work());

import { greet, greetMe, greetAtNight } from "./Task3.js";
greet()
greetMe("Tuhin Ghosh")
greetAtNight("Tuhin")

import factorial from "./Task4.js";
factorial(6)

import * as all from "./Task5.js"
console.log(all.name);
console.log(all.PI);
all.dog()
all.cat()
all.hello()

import { add } from "./Task6.js";
console.log(`ADD: ${add(2,4)}`);

import axios from "axios";
axios.get('https://api.github.com/users/TuhinCodeCraft')
.then(data => {
    console.log(data);
}).catch(err => {
    console.log(`Error Occurred: ${err}`);
})