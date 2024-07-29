const factorial = (num) => {
    let fac = 1
    for(let i = 1; i <= num; i++){
        fac *= i
    }
    console.log(`Factorial of ${num} is ${fac}`);
}
export default factorial