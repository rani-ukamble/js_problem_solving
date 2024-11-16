// 1. Check if a required field is not empty

function isRequired(ip){
    return ip.trim()!=="";
}
// console.log(isRequired("hi"))


// 2. Check if a name is of minimum length
function checkName(name, minLength){
    return name.trim().length>minLength
}
// console.log(checkName("rani", 8))


// 3. Check if the email is in a valid format
function checkEmail(email) {
    const emailPattern = /^[a-zA-Z0-9%+._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Example usage
// console.log(checkEmail("example@example.com"));  // true
// console.log(checkEmail("user+name@domain.co.uk")); // true
// console.log(checkEmail("invalid@domain")); // false
// console.log(checkEmail("invalid@.com")); // false
// console.log(checkEmail("another_example@domain.org")); // true


// 4. Check if the password meets minimum length requirements
function checkPassLen(password, minLength){
    return password.length>=minLength
}
// console.log(checkPassLen("****89", 5)) 


