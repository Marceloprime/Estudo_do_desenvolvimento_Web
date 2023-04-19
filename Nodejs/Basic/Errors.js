// RangeError
// This is thrown when a number is outside an allowable range of values.

const l = console.log
const arr = [90,88]
arr.length=90**99

// ReferenceError
// This error is thrown when a reference made to a variable/item is broken. That is the variable/item doesn’t exist.

const l2 =console.log
const cat = "cat"
cat
dog

// SyntaxError
// This is the most common error we encounter. This error occurs when we type code that the JS engine can understand.

const l3 = console.log
let cat2 h = "cat"

// TypeError
// TypeError is used to indicate an unsuccessful operation when none of the other NativeError objects are an appropriate indication of the failure cause.

const num = 123
num.toUpperCase()

// URIError
decodeURI('%')

// EvalError
// This is used to identify errors when using the global eval() function.

// InternalError
// This error occurs internally in the JS engine, especially when it has too much data to handle and the stack grows way over its critical limit.