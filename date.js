let date1 = new Date("2023-01-01");
console.log(date1); // Expected output: Date representing January 1, 2023, at 00:00:00 (midnight)

let date2 = new Date("January 1, 2023");
console.log(date2); // Corrected the format. Expected output: Date representing January 1, 2023, at 00:00:00

let date3 = new Date();
console.log(date3); // Outputs the current date and time

let date4 = new Date(2023, 0, 1, 2, 30, 4);
console.log(date4); // Expected output: January 1, 2023, at 2:30:04 AM

// Retrieving details of date1
console.log(date4.getFullYear()); // Outputs the year: 2023
console.log(date4.getMonth());    // Outputs the month (0 for January): 0
console.log(date4.getDate());     // Outputs the day of the month: 1
console.log(date4.getHours());    // Outputs the hour (should be 0): 0
console.log(date4.getTime());     // Outputs the timestamp in milliseconds since Jan 1, 1970

let date5 = new Date(0)
console.log(date5.toUTCString())