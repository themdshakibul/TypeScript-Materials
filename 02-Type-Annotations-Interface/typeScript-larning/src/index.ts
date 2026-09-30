const name = "Shakibul";
const age = 20; // Type Inference

const address: string = "Manikgonj"; // Type Annotation

//? const variableName: type = value

const scors: number[] = [10, 20, 30];

let count: number = 100;
count = 100;
// count = "Hello world"; // Error

function greet(name: string) {
  return `Hello ${name}`;
}

function add(a: number, b: number): number {
  return a + b;
}

function calcluteDiscount(price: number): number {
  return price * 0.2;
  //   return `Discount: ${price * 0.2}`; // Error Type 'string' is not assignable to type 'number'.
}

const price = 10;
const quantity = 2;
const total = price * quantity;

const user = {
  name: "Shakibul",
  age: 20,
  isAdmin: false,
};

//  Contextual Typing
//  Regular Inference = Right => Left
//  Contextual Typing = Left => Right

document.addEventListener("click", (event) => {
  console.log(event.button);
});

document.addEventListener("scroll", (event) => {
  console.log(event.target);
});

const users = ["Alice", "Bob", "Eve"];

//! 'users' is automatically Contextually Typed as a 'string' array
users.forEach((user) => {
  console.log(user.toUpperCase()); // Safe and automatically typed!
});

//  Annotation: Developer => TypeScript
//  Interface: TypeScript => Developer

