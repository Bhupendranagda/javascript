// Scenario

// 1. Register
// 2. send welcome Email
// 3. Login
// 4. Get used Data
// 5. Dispaly User Data

function register() {
  setTimeout(() => {
    console.log("Register End");
  }, 2000);
}
function email() {
  setTimeout(() => {
    console.log("email End");
  }, 1000);
}
function login() {
  setTimeout(() => {
    console.log("login End");
  }, 1000);
}
function getUserData() {
  setTimeout(() => {
    console.log("Get USer data End");
  }, 1000);
}

function displayData() {
  setTimeout(() => {
    console.log("Display Data  End");
  }, 1000);
}

register();
email();
login();
getUserData();
displayData();

console.log("other Application work");

/*
Output:--------------------
other Application work
Register End
email End
login End
Get USer data End
Display Data  End

*/

/*
By above asynchronous code the earliar issue is resolved not the code is not blocked but
there is one more issue suppose for example the register function take 2 sec then out requirement will fails
Requirement Fails output :--------------
other Application work
email End
login End
Get USer data End
Display Data  End
Register End

So to solve this issue we can sue callback => see next file callback.js
*/
