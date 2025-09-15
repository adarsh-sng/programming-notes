function createCaller() {
  const data1 = { message: "This is like req" };
  const data2 = { send: (msg) => console.log("Response:", msg) };
  const data3 = () => console.log("Moving to next...");

  function callFunction(userFunction) {
    console.log("System is calling your function...");
    userFunction(data1, data2, data3); // WE provide the parameters
  }
  
  return callFunction;
}

function myMiddleware(param1, param2, param3) {
  console.log("Got param1:", param1.message);
  param2.send("Hello from middleware!");
  param3(); // call next
}

// Usage - similar to app.use() in Express
const caller = createCaller();
caller(myMiddleware); 


// we can use more advance version for class also(see next)