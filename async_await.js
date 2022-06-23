// Scenario

// 1. Register
// 2. send welcome Email
// 3. Login
// 4. Get used Data
// 5. Dispaly User Data

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("Error while Registering");
      console.log("Register End");
      resolve("honey");
    }, 2000);
  });
}
function email() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("email not found");
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
// Await can be used with async function
// also Await can be used inside funciton only
async function authenticate() {
  try {
    const registerData = await register();
    await email();
    await login();
    await getUserData();
    await displayData();
    console.log("msg", registerData);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}

authenticate()
  .then(() => {
    console.log("last ride");
  })
  .catch((err) => {
    console.log(err);
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
