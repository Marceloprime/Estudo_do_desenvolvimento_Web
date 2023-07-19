const { AsyncLocalStorage, AsyncResource } = require('node:async_hooks');

// This class creates stores that stay coherent through asynchronous operations.
const asyncLocalStorage = new AsyncLocalStorage();

asyncLocalStorage.enterWith({"msg" : "test"})

console.log(asyncLocalStorage.getStore())