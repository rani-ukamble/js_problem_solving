
let dept = ['marketing', 'Engineering'] 

console.log(`first: ${dept[0]}`)
console.log(`first: ${dept.length}`)

dept.push('HR')
console.log(dept)


// Map:

// create map
let access_codes = new Map();

access_codes.set("e1", "78")
access_codes.set("e2", "67")
console.log(access_codes.size) 

let code = access_codes.get("e1");
console.log(code)




// Set

// Array
let arr = []
let a1 = new Array()
let a2 = ["i1", "i2"]
let a4 = new Array("i1", "i2") 

// Access values
let names = [1, 2, 4, 78, 8, 45, 23] 
console.log(names[0])
console.log(names[10]) //undefined 

let ans = a2.includes("i1")
console.log(ans) //true

console.log(`index of i1: ${a2.indexOf("i2")}`)


// Add at the end 
a2.push("Hello")
console.log(a2)

// add at the begin
a2.unshift("sara")
console.log(a2) 

// add at specific index

a2.splice(1, 0, "raj") 
console.log(a2) 
// 1 is the start index where "raj" will be inserted.
// 0 is the delete count, meaning no elements will be removed from the array.
// "raj" is the new element to insert at index 1.


// Remove  