// True
var a = 10;
console.log(a > 5);


// False
var b = 10;
console.log(b < 5);

console.log("==========================================================");

// Truthy

/*
- TRUE
- NON-ZERO NUMBER
- "STRING"
- OBJECT
- ARRAYS
- FUNCTIONS
*/

var x = Boolean(true);
console.log("TRUTHY TRUE: ", x);

var y = Boolean(1);
console.log("TRUTHY NON-ZERO NUMBER: ", y);

var z = Boolean("Hello World");
console.log("TRUTHY STRING: ", z);

var x1 = Boolean(nama = "THIS IS OBJECT");
console.log("TRUTHY OBJECT: ", x1);

var y1 = Boolean(Data = ["1", "2", "3"]);
console.log("TRUTHY Array: ", y1);

var z1 = Boolean(function data(number) { return number });
console.log("TRUTHY FUNCTIONS: ", z1);




console.log("==========================================================");

// Falsy

/*
- FALSE
- 0 (ZERO NUMBER)
- "" (EMPTY STRING)
- UNDEFINED
- NULL
- NAN
*/

var x = Boolean(false);
console.log("FALSY FALSE: ", x);

var y = Boolean(0);
console.log("FALSY ZERO NUMBER: ", y);

var z = Boolean("");
console.log("FALSY EMPTY STRING: ", z);

var x1 = Boolean(undefined);
console.log("FALSY UNDEFINED: ", x1);

var y1 = Boolean(null);
console.log("FALSY NULL: ", y1);

var z1 = Boolean(NaN);
console.log("FALSY NaN: ", z1);