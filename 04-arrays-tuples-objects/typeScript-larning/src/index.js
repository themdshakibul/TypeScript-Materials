"use strict";
// Arrays
Object.defineProperty(exports, "__esModule", { value: true });
const products = ["Laptop", "Keybord", "Mouse"];
const names = ["Shakibul", "Rokibul"];
const score = [10, 20, 90, 100];
const flags = [true, false, true];
names.push("Khalid");
console.log(names); // ["Shakibul", "Rokibul", "Khalid"]
const allName = ["Shakibul", "Rokibul", "Khalid"];
const allScore = [10, 20, 30];
// const items = [];
const items = [];
// Readonly
function pintNumbers(names) {
    console.log(names.join(", "));
    // names.push("Khalid"); // Error
}
const mixedArray = ["Shakibul", 10, true, "Rokibul", 20, false];
//# sourceMappingURL=index.js.map