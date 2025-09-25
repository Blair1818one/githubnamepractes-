// Sample input values
let number = 15;
let userRole = "admin";
let isLoggedIn = true;

// 1. Simple if
if (number > 10) {
    console.log("The number is greater than 10.");
}

// 2. if...else
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// 3. if...else if...else
if (number < 0) {
    console.log("Negative number.");
} else if (number === 0) {
    console.log("Zero.");
} else {
    console.log("Positive number.");
}

// 4. switch statement
switch (userRole) {
    case "admin":
        console.log("Welcome, admin!");
        break;
    case "editor":
        console.log("Welcome, editor!");
        break;
    case "viewer":
        console.log("Welcome, viewer!");
        break;
    default:
        console.log("Role not recognized.");
        break;
}

// 5. Ternary operator
let access = isLoggedIn ? "Access granted" : "Access denied";
console.log(access);

// 6. Logical operators
if (isLoggedIn && userRole === "admin") {
    console.log("Admin has full access.");
}

if (isLoggedIn || userRole === "guest") {
    console.log("User has limited or full access.");
}

if (!isLoggedIn) {
    console.log("User must log in.");
} else {
    console.log("User is already logged in.");
}
