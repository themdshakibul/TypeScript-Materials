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

const mixedArray: (string | number | boolean)[] = [
  "Shakibul",
  10,
  true,
  "Rokibul",
  20,
  false,
];

mixedArray.push("Shakibul");
mixedArray.push(10);
mixedArray.push(false);

//  Object Types
const user = {
  id: 1,
  name: "Shakibul",
  active: true,
};

type User = {
  id: number;
  name: string;
  active: boolean;
};

const user1: User = {
  id: 1,
  name: "Shakibul",
  active: true,
};

function printMyUser(user: User) {
  console.log(user.name);
}

// Optional Object Properties

type Emp = {
  id: number;
  //  readonly id: number;
  name: string;
  nickName?: string;
};

const emp1: Emp = {
  id: 1,
  name: "Shakibul",
};

const emp2: Emp = {
  id: 1,
  name: "Shakibul",
  nickName: "Shakib",
};

function printNickName(emp: Emp) {
  if (emp.nickName) {
    console.log(emp.nickName.toUpperCase());
  }
}

// Nested Object Types

type Address = {
  city: string;
  country: string;
};

type Artist = {
  name: string;
  address: Address;
};

const address1: Address = {
  city: "Manikgonj",
  country: "Bangladesh",
};

const artist1: Artist = {
  name: "Shakibul",
  address: address1,
};

console.log(address1.city);

//! Array and Object Together

type Product = {
  id: number;
  name: string;
  price: number;
};

const myProducts: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "Keybord",
    price: 2500,
  },
];

myProducts.push({
  id: 3,
  name: "Mouse",
  price: 800,
});

//! Excess Property Check

type Dept = {
  id: number;
  name: string;
};

function saveDept(dept: Dept) {
  // Save here
}

saveDept({
  id: 1,
  name: "Shakibul",
});

// Structural Typing

type Point = {
  x: number;
  y: number;
};

const cordinates = {
  x: 10,
  y: 20,
  label: "Origin",
};

function printPoint(point: Point) {
  console.log(point.x, point.y);
}

printPoint({ x: 100, y: 200 });
