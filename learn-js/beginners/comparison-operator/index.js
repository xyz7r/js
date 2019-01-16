/*

Equal (==)
Not equal (!=)
Strict equal (===)
Strict not equal (!==)
Greater than (>)
Greater than or equal (>=)
Less than (<)
Less than or equal (<=)


*/

var a = 2;

//-Equal (==)
var equal = Boolean(a == 2);
console.log("Equal Results : ", equal); //output : True

var equal = Boolean(a == "2");
console.log("Equal Results : ", equal); //output : True


console.log("==================================================");

//-Not equal (!=)
var equal = Boolean(a != 2);
console.log("Not Equal Results : ", equal); //output : True

var equal = Boolean(a != "2");
console.log("Not Equal Results : ", equal); //output : True



console.log("==================================================");



//-Strict Equal (===)
var equal = Boolean(a === 2);
console.log("Strict Equal Results : ", equal); //output : True

var equal = Boolean(a === "2");
console.log("Strict Equal Results : ", equal); //output : False

console.log("==================================================");

//-Strict Not equal (!==)
var equal = Boolean(a !== 2);
console.log("Strict Not Equal Results : ", equal); //output : False

var equal = Boolean(a !== "2");
console.log("Strict Not Equal Results : ", equal); //output : True


console.log("==================================================");

// Greater than (>)
var equal = Boolean(a > 1);
console.log("Greater than Results : ", equal); //output : True

var equal = Boolean(a > 2);
console.log("Greater than Results : ", equal); //output : False

var equal = Boolean(a > "2");
console.log("Greater than Results : ", equal); //output : False


console.log("==================================================");

// Greater than or equal (>=)
var equal = Boolean(a >= 1);
console.log("Greater than or equal than Results : ", equal); //output : True

var equal = Boolean(a >= 2);
console.log("Greater than or equal than Results : ", equal); //output : True

var equal = Boolean(a >= "2");
console.log("Greater than or equal than Results : ", equal); //output : True




console.log("==================================================");

// Less than (<)
var equal = Boolean(a < 1);
console.log("Less than Results : ", equal); //output : False

var equal = Boolean(a < 2);
console.log("Less than Results : ", equal); //output : False

var equal = Boolean(a < "2");
console.log("Less than Results : ", equal); //output : False


console.log("==================================================");

// Less than or equal (<=)
var equal = Boolean(a <= 1);
console.log("Less than or equal Results : ", equal); //output : False

var equal = Boolean(a <= 2);
console.log("Less than or equal Results : ", equal); //output : True

var equal = Boolean(a <= "2");
console.log("Less than or equal Results : ", equal); //output : True
