const name = "Hello";
const number = 42;
const isAwake = true;
let empty;
const veryEmpty = null;
const bigNumber = 314n;
const symbol = Symbol(242);

console.log("Name: ", name, "| Type: ", typeof name);
console.log("Number: ", number, "| Type: ", typeof number);
console.log("Are you awake?: ", isAwake, "| Type: ", typeof isAwake);
console.log("Where is the bottom of the universe?: ", veryEmpty, "| Type: ", typeof veryEmpty);
console.log("How many seconds has there been up to this point?: ", bigNumber, "| Type: ", typeof bigNumber);
console.log("Symbol: ", symbol, "| Type: ", typeof symbol);