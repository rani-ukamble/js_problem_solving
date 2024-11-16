employee = {
    "name": "John Doe",
    "age": 30,
    "address": "123 Main St, Springfield, IL",
    "dob": "1993-05-15"
} 

//Convert to JSON string

let jsonVal = JSON.stringify(employee)
console.log(jsonVal)
jsonVal = JSON.stringify(employee, null, 2)
console.log(jsonVal)


// Convert back to object
objVal = JSON.parse(jsonVal)
console.log(objVal)

// writing json directly

let jsonString = `{
    "name": "John Doe",
    "address": "123 Main St, Springfield, IL"
}`;

obj1 = JSON.parse(jsonString)
console.log(jsonString)


