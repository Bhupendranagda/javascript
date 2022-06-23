// Scenario

// 1. Register
// 2. send welcome Email
// 3. Login
// 4. Get used Data
// 5. Dispaly User Data

function register() {
  console.log("Register End");
}
function email() {
  console.log("email End");
}
function login() {
  console.log("login End");
}
function getUserData() {
  console.log("Get USer data End");
}

function displayData() {
  console.log("Display Data  End");
}

register();
email();
login();
getUserData();
displayData();

console.log("other Application work");

// As This is a synchronous Code and we are getting the output we want but
// suppose on the the method for example register method has some delay
// code then in the case out requirement fails.
// for above usecase see file synchronous1.js
