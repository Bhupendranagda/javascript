// Scenario

// 1. Register
// 2. send welcome Email
// 3. Login
// 4. Get used Data
// 5. Dispaly User Data

function register(callback) {
  setTimeout(() => {
    console.log("Register End");
    callback();
  }, 2000);
}
function email(callback) {
  setTimeout(() => {
    console.log("email End");
    callback();
  }, 2000);
}
function login(callback) {
  setTimeout(() => {
    console.log("login End");
    callback();
  }, 1000);
}
function getUserData(callback) {
  setTimeout(() => {
    console.log("Get USer data End");
    callback();
  }, 1000);
}

function displayData() {
  setTimeout(() => {
    console.log("Display Data  End");
  }, 1000);
}

// callback hell
register(function () {
  email(function () {
    login(function () {
      getUserData(function () {
        displayData();
      });
    });
  });
});

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
 Above Code gives solution to out previous problem but along with that new problem arises and that is callback hell
 nesting of function inside function is quite tidious to work with
 So to solve this issue see next file promise.js
*/
