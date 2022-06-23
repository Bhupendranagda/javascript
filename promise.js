// Scenario

// 1. Register
// 2. send welcome Email
// 3. Login
// 4. Get used Data
// 5. Dispaly User Data

// Promise have some states
// 1 pending
// 2 reject
// 3 resolve => all work is done you can end

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("Error while Registering");
      console.log("Register End");
      resolve();
    }, 2000);
  });
}
function email() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("email End");
      resolve();
    }, 2000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login End");
      resolve();
    }, 1000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get USer data End");
      resolve();
    }, 1000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display Data  End");
      resolve();
    }, 1000);
  });
}

// The data is then is earlier promise data
register()
  .then(email)
  .then(login)
  .then(getUserData)
  .then(displayData)
  .catch((err) => {
    console.log("error", err);
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
   Above Code gives solution to out previous problem but this code is fine but there is a better way to handle this and that is Async and Await 
   It looks like synchronous code but it is Asynchronous
  */
