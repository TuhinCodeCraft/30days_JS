// Bubble sort:
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
const resBubbleSort = bubbleSort([64, 34, 25, 12, 22, 11, 90]); // [11, 12, 22, 25, 34, 64, 90]
console.log(resBubbleSort);

// Selection sort:
const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};
const resSelectionSort = selectionSort([64, 34, 25, 12, 22, 11, 90]); // [11, 12, 22, 25, 34, 64, 90]
console.log(resSelectionSort);

// Insertion sort:
const insertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
const resInsertionSort = insertionSort([64, 34, 25, 12, 22, 11, 90]); // [11, 12, 22, 25, 34, 64, 90]
console.log(resInsertionSort);

// Linear search:
const linearSearch = (arr, key) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};
const resLinearSearch = linearSearch([64, 34, 25, 12, 22, 11, 90], 22); // 4
console.log(resLinearSearch);

// Binary search:
const binarySearch = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
const resBinarySearch = binarySearch([11, 12, 22, 25, 34, 64, 90], 22); // 2
console.log(resBinarySearch);

// Character count in a string:
const charCount = (str) => {
  const count = {};
  for (let char of str) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }
  return count;
};
const resCharCount = charCount('hello'); // { h: 1, e: 1, l: 2, o: 1 }
console.log(resCharCount);

// longest substring without repeating characters:
const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let start = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] >= start) {
      start = map[s[i]] + 1;
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};
const resLengthOfLongestSubstring = lengthOfLongestSubstring('abcabcbb'); // 3
console.log(resLengthOfLongestSubstring);

// Rotate an array by k positions:
const rotate = (arr, k) => {
  const n = arr.length;
  k %= n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  return arr;
};
const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};
const resRotate = rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
console.log(resRotate);

// merge two sorted arrays in one sorted array:
const merge = (arr1, arr2) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};
const resMerge = merge([1, 3, 5, 7], [2, 4, 6, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(resMerge);

