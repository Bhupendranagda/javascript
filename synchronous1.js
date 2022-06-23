// Scenario

// 1. Register
// 2. send welcome Email
// 3. Login
// 4. Get used Data
// 5. Dispaly User Data

function waitforthreeSecond() {
  let ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
}

function register() {
  waitforthreeSecond();
  console.log("Register End");
}
function email() {
  waitforthreeSecond();
  console.log("email End");
}
function login() {
  waitforthreeSecond();
  console.log("login End");
}
function getUserData() {
  waitforthreeSecond();
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

// The problem in the above code is that every function take 3 sec to execute
// but because this is synchronous code so rest code is waiting for the functions to complete
// this shows that our code is in block state
// to solve this we can use asynchronous js by putting set timeout instead of that 3 sec function
// Please refer next asynchronous.js
