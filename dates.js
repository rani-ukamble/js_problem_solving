// create a date

let d1 = new Date("2023-01-23T14:23:02-05:00")
console.log(`Date 1: ${d1}`)

// Display just calender date
console.log(`Calender Date: ${d1.toDateString()}`);

// Display Locale specific date string
console.log(`Locale en-US: ${d1.toLocaleDateString('en-US')}`)
console.log(`Locale en-GB: ${d1.toLocaleDateString('en-GB')}`)
console.log(`Locale ja-JP: ${d1.toLocaleDateString('ja-JP')}`) 

console.log(`Date Time: ${d1.toTimeString()}`)



// Display Locale specific time string
console.log(`Locale en-US: ${d1.toLocaleTimeString('en-US')}`)
console.log(`Locale en-GB: ${d1.toLocaleTimeString('en-GB')}`)
console.log(`Locale ja-JP: ${d1.toLocaleTimeString('ja-JP')}`) 