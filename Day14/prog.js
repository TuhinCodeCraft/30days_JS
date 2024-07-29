class Person{
    name = "Tuhin"
    age = 30
    greet(){
        return `Hello ${this.name}`
    }
    updatedAge(age){
        this.age = age
    }
    static generalGreet(){
        console.log('Hello Everyone');
    }
    set fullname(name){
        this.name = name
    }
    get fullname(){
        return `${this.name} Ghosh`
    }
}
const ob = new Person()
console.log(ob.greet())
ob.updatedAge(23)
console.log(`The age of ${ob.name} is ${ob.age}`);

let noOfStudents = 0
class Student extends Person{
    studentID = 102
    constructor(){
        super()
        noOfStudents++
    }
    getStudentID(){
        return this.studentID
    }
    greet(){
        console.log(`This a greeting msg to the student: ${this.studentID}`);
    }
    static totalStudents(){
        console.log(`The total number of students: ${noOfStudents}`);
    }
}
const s = new Student()
console.log(`The student id is: ${s.getStudentID()}`);
s.greet()

Person.generalGreet()
Student.totalStudents()

console.log(`Here is the full name: ${ob.fullname}`);
ob.fullname = 'Rahul'
console.log(`Here is the full name: ${ob.fullname}`);

class Account{
    constructor(amt){
        this._balance = amt
    }
    deposit(amt){
        this._balance += amt
    }
    withdraw(amt){
        this._balance -= amt
    }
    get balance(){
        return this._balance
    }
}
const obj = new Account(20000)
obj.deposit(3000)
console.log(obj.balance)