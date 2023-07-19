/**
 * 
 * We strongly discourage the use of the async_hooks API. 
 * Other APIs that can cover most of its use cases include:

 * - AsyncLocalStorage tracks async context
 * - process.getActiveResourcesInfo() tracks active resources
 */
const async_hooks = require('node:async_hooks');

/**
 * An asynchronous resource represents an object with an associated callback. 
 * This callback may be called multiple times, such as the 'connection' event in net.createServer(), 
 * or just a single time like in fs.open(). A resource can also be closed before the callback is called. 
 * AsyncHook does not explicitly distinguish between these different cases 
 * but will represent them as the abstract concept that is a resource.
 */

// Return the ID of the current execution context.
const eid = async_hooks.executionAsyncId();
console.log(eid)
// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerAsyncId();

// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook =
    async_hooks.createHook({ init, before, after, destroy, promiseResolve });

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.
asyncHook.enable();

// Disable listening for new asynchronous events.
asyncHook.disable();

//
// The following are the callbacks that can be passed to createHook().
//

// init() is called during object construction. The resource may not have
// completed construction when this callback runs. Therefore, all fields of the
// resource referenced by "asyncId" may not have been populated.
function init(asyncId, type, triggerAsyncId, resource) { }

// before() is called just before the resource's callback is called. It can be
// called 0-N times for handles (such as TCPWrap), and will be called exactly 1
// time for requests (such as FSReqCallback).
function before(asyncId) { }

// after() is called just after the resource's callback has finished.
function after(asyncId) { }

// destroy() is called when the resource is destroyed.
function destroy(asyncId) { }

// promiseResolve() is called only for promise resources, when the
// resolve() function passed to the Promise constructor is invoked
// (either directly or through other means of resolving a promise).
function promiseResolve(asyncId) { }