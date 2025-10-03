// -------------------------------
// Arrays in JavaScript
// -------------------------------

// Creating a simple array with numbers
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naageshvar"]; // Creating an array of strings
// Another way to create an array using the 'new Array()' constructor
const myArr2 = new Array(1, 2, 3, 4); 

// console.log(myArr[1]);   // Access element at index 1

// -------------------------------
// Array methods(Basics)
// -------------------------------

// myArr.push(6);   // Adds 6 to the end of the array
// myArr.push(7);   // Adds 7 to the end 
// myArr.pop();     // Removes the last element from the array

// myArr.unshift(9); // Adds 9 to the beginning of the array (shifts everything else forward)
// myArr.shift();    // Removes the first element

// console.log(myArr.includes(9)) // Checks if 9 exists in the array (returns true/ false)
// console.log(myArr.indexOf(9))  // Returns index of 9 if found, otherwise -2

// -------------------------------
// join() mehtod
// -------------------------------

// join() converts array into a string (comma-separated by default)
const newArr = myArr.join();

// console.log(myArr);      // Original aray remains unchanged
// console.log(newArr);     // Joined array (as a string)
// console.log(typeof newArr);  // Type will be "string"

// -------------------------------
// Slice vs Splice
// -------------------------------
// slice, splice

console.log("A ", myArr);  // Original array before slice/splice

// slice(start, end) -> Extracts elements WITHOUT modifying original array
const myn1 = myArr.slice(1, 3);     // Extract elements from index 1 to 2 (end is non-inclusive)

console.log(myn1);          // Prints sliced portion
console.log("B ", myArr);   // Original array remains unchanged after slice

// splice (start, deleteCount) -> Removes elements FROM the original array
const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1

console.log(myn2);          // Prints removed elements
console.log("C ", myArr);   // Original array is modified after splice
