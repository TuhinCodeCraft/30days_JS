const factorial = (num) => {
    if(num === 1) return 1
    return num*factorial(num-1)
}
console.log(`The factorial of 5 is: ${factorial(5)}`);

const fibonacci = (n) => {
    if(n===0 || n===1) return n
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(`The 7th fibonacci term is: ${fibonacci(6)}`);

const sumOfArray = (arr, n) => {
    if(n<=0) return 0
    return arr[n-1] + sumOfArray(arr, n-1)
}
console.log(sumOfArray([1,2,3,4,5], 5));

function findMaxRec(arr, n) 
{ 
	if (n == 1) 
		return arr[0]; 
		
	return Math.max(arr[n - 1], findMaxRec(arr, n - 1)); 
} 
console.log(findMaxRec([ 1, 4, 45, 6, -50, 10, 2 ], 7))


let newStr = ""
function reverse(str, len) {
    if (len == str.length) {
        return;
    }
    reverse(str, len + 1);
    newStr += str[len]
}
let a = "Tuhin";
reverse(a, 0);
console.log(newStr);

function isPalRec( str , s , e) {
    if (s == e)
        return true;
    if ((str.charAt(s)) != (str.charAt(e)))
        return false;
    if (s < e + 1)
        return isPalRec(str, s + 1, e - 1);

    return true;
}
function isPalindrome( str) {
    var n = str.length;
    if (n == 0)
        return true;

    return isPalRec(str, 0, n - 1);
}
    var str = "racecar";
    if (isPalindrome(str))
        console.log(`Palindrome`);
    else
        console.log(`Not palindrome`);

function binarySearchUsingRecursion(arr, x, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return true;
    if (arr[mid] > x) return binarySearchUsingRecursion(arr, x, start, mid - 1);
    else return binarySearchUsingRecursion(arr, x, mid + 1, end);
}
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
if (binarySearchUsingRecursion(arr, x, 0, arr.length - 1)) console.log(`Element found at index ${arr.indexOf(x)}`);
else console.log(`Element not found`);

function noOfOccurancesInArray(arr, x, n) {
    if (n === 0) return 0;
    let count = noOfOccurancesInArray(arr, x, n - 1);
    if (arr[n - 1] === x) count++;
    return count;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 2, 2];
let x1 = 2;
console.log(`The number of occurances of ${x1} in the array is: ${noOfOccurancesInArray(arr1, x1, arr1.length)}`);