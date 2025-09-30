// ----------------------------
// Working with JavaScript Dates
// ----------------------------

// Create a new Date object with the current date and time
let myDate = new Date();

// Different ways to display a Date object (commented for now)
// console.log(myDate.toString());          // Returns full date string
// console.log(myDate.toDateString());      // Returns only date poriton (human readable)
// console.log(myDate.toLocaleString());    // Returns date & time in local format
// console.log(typeof myDate);              // Object -> because Date is an object in JS

// ----------------------------
// Creating custom Date object
// ----------------------------

// Various ways to create specific date objects:

// let myCreateDate = new Date(2023, 0, 23);        // Year, Month (0 = Jan), Day -> Jan 23, 2023
// let myCreateDate = new Date(2023, 0, 23, 5, 3)   // Year, Month, Day, Hour, Minute -> Jan 23 2023, 5:03 AM
// let myCreateDate = new Date("2023-01-14");       // YYYY-MM-DD format
let myCreateDate = new Date("01-14-2023");          // MM-DD-YYYY format -> Jan 14, 2023

// console.log(myCreateDate.toLocaleString());      // Display created date in local format

// ----------------------------
// Working with timestamps
// ----------------------------

// Get current timestamp in milliseconds since Jan 1, 1970 (Unix Epoch)
let myTimeStamp = Date.now();

// console.log(myTimeStamp);                    // Print current timestamp in ms
// console.log(myCreateDate.getTime());         // Print timestamp of created date in ms

// Convert current timestamp to seconds (instead of milliseconds)
console.log(Math.floor(Date.now()/1000));       // Floor ensures whole number of seconds

// ----------------------------
// Extracting parts of the date
// ----------------------------

// Create another Date object for the current time
let newDate = new Date();
console.log(newDate);                   // Print current date and time
console.log(newDate.getMonth() + 1);    // Get the current month (0 = Jan, so add +1 for human readable month)
console.log(newDate.getDay());          // Get the current day of the week (0 = Sunday, 6 = Saturday)

// ----------------------------
// Formatting with toLocalString
// ----------------------------

// Foramt date with options -> Example: "Monday, 3/14/2023"
// Passing 'default' locale uses system default language
// newDate.toLocaleString('default', {
//     weekday: "long",         // Full name of the weekday (eg, "Monday")
//     timeZone: '',            // Empty string -> uses system default timezone

// })
