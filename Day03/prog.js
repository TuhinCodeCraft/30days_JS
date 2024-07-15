// Activity 1: (If-Else Statement)
// Task 1:
let num = 5
if (num>0) {
    console.log(`${num} is positive`);
} else if(num<0){
    console.log(`${num} is negative`);
} else{
    console.log("The value of the number is 0");
}

// Task 2:
let age = 40
if(age>=18)
    console.log("The person is eligable for vote");

// Activity 2: (Nested If-Else statement)
// Task 3:
let n1 = -4, n2 = 5, n3 = 0
if (n1>n2) {
    if(n1>n3){
        console.log(`${n1} is greater`);
    } else{
        console.log(`${n3} is greater`);
    }
} else{
    if (n2>n3) {
        console.log(`${n2} is greater`);
    } else {
        console.log(`${n3} is greater`);
    }
}

// Activity 3: (Switch Case)
// Task 4:
let dayNumber = 4
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter a valid Input");
}

// Task 5:
const score = 100
let grade = ""
switch (true) {
    case score>=90:
        grade = "A"
        break;
    case score>=80:
        grade = "A"
        break;
    case score>=70:
        grade = "B"
        break;
    case score>=60:
        grade = "C"
        break;
    case score>=50:
        grade = "D"
        break;
    default:
        grade = "E"
}

// Activity 4: (Conditional Ternary Operator)
// Task 6:
const val = 7
val%2==0?console.log(`${val} is Even`):console.log(`${val} is odd`);

// Activity 5: (Combinig Conditions)
// Task 7:
const year = 2024
if (year%100==0 && year%400==0) {
    console.log(`${year} is leap year`);
} else if(year%4==0){
    console.log(`${year} is leap year`);
} else{
    console.log(`${year} is not leap year`);
}