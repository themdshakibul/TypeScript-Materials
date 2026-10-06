// A Primitive (or base) is a basic value that isn't an object.

// JavaScript has Primitive value such as

// 1. string
// 2. number
// 3. boolean
// 4. bigint
// 5. symbol
// 6. null
// 7. undefined.

// These become the building blocks for more advanced types such ad

// object
// unions
// generics
// and conditional types.

let name: string = "Shakibul";
let age: number = 19;
let isLoggedIn: boolean = true;

// string
let firstName: string = "Shakibul";
let message: string = "Hello";
let greeting: string = `Welcome!`;

firstName.toUpperCase();

// number
let count: number = 10;
let prie: number = 99.9;
let tempurature: number = -10;
let score: number = 95.5;

// boolean
let isAdmin: boolean = true;
let isPermission: boolean = false;

// string and String
let name1: String = new String("Shakibul");

// null and undefined
let result: null = null;
let user: undefined = undefined;

let userName: string | null = "Shakibul";
userName = "The String and Null";

let userNames: string | null = getSavedUser(); // Might return null

if (userNames !== null) {
  userNames.toUpperCase();
}

// undefined

const users = ["A", "B"];
const foundUser: string | undefined = users.find((name) => name === "B");

// bigint

const hugeNumber: bigint = 9999999999995677n;

// symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
// console.log(id1 === id2); // false

// The Spacial Types: any, unknown, void, never

// any
let someValue: any = "Hello World";
someValue.toUpperCase();
someValue.notRealMethod();
someValue.foo.bar.baz;

// unknown
let dynamicValue: unknown = "Hello World";

if (typeof dynamicValue === "string") {
  console.log(dynamicValue.toUpperCase());
}

// void

function logMessage(message: string): void {
  console.log(message);
}

// never

function keepAlive(): never {
  while (true) {
    console.log("Hertbeat....");
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

type Shape = "square" | "circle";
function getArea(shape: Shape) {
  switch (shape) {
    case "square":
      return 100;
    case "circle":
      return 314;

    default:
      // TypeScript know "shape" can only be squre or circle.
      // Threfore, at this point, "shape" is typed as "never".
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
