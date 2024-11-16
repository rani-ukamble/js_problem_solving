// Round number to integers

num = 123.878
console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))

// fixed
fixed_num = num.toFixed(2) //2 digits after decimal points
console.log(fixed_num)
console.log(typeof(fixed_num)) //string 

//Display in locale specific format

let num1 = 1_000_000
console.log(`USA: ${num1.toLocaleString('en-US')}`)
console.log(`Greece: ${num1.toLocaleString('el-EL')}`)
console.log(`Bangladesh: ${num1.toLocaleString('bg-BG')}`)
console.log(`Punjab: ${num1.toLocaleString('pa-PA')}`)  


// Intl format

let salary = 100000;
let monthly_salary = salary/12
console.log(`monthly salary: ${monthly_salary.toFixed(2)}`) 

let formatter1 = new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'});
console.log(`US Dollars: ${formatter1.format(monthly_salary)}`)


let formatter2 = new Intl.NumberFormat('de-DE', {style: 'currency', currency:'EUR'});
console.log(`Euros: ${formatter1.format(monthly_salary)}`)


let formatter3 = new Intl.NumberFormat('ja-JA', {style: 'currency', currency:'JPY'});
console.log(`Yen: ${formatter1.format(monthly_salary)}`)