// Arrays

const products = ["Laptop", "Keybord", "Mouse"];

const names: string[] = ["Shakibul", "Rokibul"];
const score: number[] = [10, 20, 90, 100];
const flags: boolean[] = [true, false, true];

names.push("Khalid");
console.log(names); // ["Shakibul", "Rokibul", "Khalid"]

const allName: Array<string> = ["Shakibul", "Rokibul", "Khalid"];
const allScore: Array<number> = [10, 20, 30];

// const items = [];

const items: string[] = [];

// Readonly

function pintNumbers(names: readonly string[]) {
  console.log(names.join(", "));
  // names.push("Khalid"); // Error
}

const mixedArray = ["Shakibul", 10, true, "Rokibul", 20, false];
