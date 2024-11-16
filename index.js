let x = 10 > 6.
console.log(x)

console.log("Hello" === "Hi")


// Math
console.log(2 ** 3)
console.log(2 ** -1)

let v = 4
++v
console.log(v)


// primitive equality passed by vallue
let s1 = "Hi"
let s2 = "Hi"
console.log(s1 === s2)  //true


// object equality passed by reference
let obj1 = {}
let obj2 = {}
console.log(obj1 === obj2) //false

// Strict equality
console.log('34' == 34) //true
console.log('34' === 34) //false  


console.log(undefined == null) //true
console.log(undefined === null) //false

// Always use strict equality operator(===)



// ****************************

// falsy values 

const isTruthy = (name, exp) => {
    console.log(`${name}: ${Boolean(exp)}`);
}

// numbers
isTruthy("val1", 0) //false
isTruthy("val1", 1) //true
isTruthy("val1", -1) //true
isTruthy("val1", NaN) //false
isTruthy("val1", 0n) //false


// Boolean, Null, undefined
isTruthy("val1", null) //false
isTruthy("val1", undefined) //false
isTruthy("val1", false) //false 


//  strings
isTruthy("val1", "") //false
isTruthy("val1", "Hi") //true
isTruthy("val1", "false") //true 

// Objects
isTruthy("val1", {}) //true 

// Undefined var
let v1;
isTruthy("undefined var", v1) // false 



// ******************************************

// Conditions

employee = {
    name: "John Doe",
    age: 30,
    address: "123 Main St, Springfield, IL",
    dob: "1993-05-15",
    role: "manager"
}

let ans;
if (employee.age > 30 || employee.dob === "1993-05-15") ans = "yes"
else ans = "no"

console.log(ans)


// Switch 

switch (employee.role) {
    case "HR":
        console.log("HR")
        break;
    case "SDE":
        console.log("SDE")
        break
    case "manager":
        console.log("manager")
        break
    default:
        console.log("Other")
}




switch (employee.role) {
    case "HR":
    case "SDE":
        console.log("Building1")
        break;
    case "manager":
        console.log("Building 2")
        break
    default:
        console.log("Other")
}


let a = prompt("a: ")



 















