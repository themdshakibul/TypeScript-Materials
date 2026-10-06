// ## Task 1 — Type Identification

const username: string = "tapas";
const age: number = 35;
const verified: boolean = true;
const accountId: bigint = 12345678901234567890n;
const token = Symbol("token");

// ## Task 2 — Build a User Model

// Create a TypeScript type for a user with:

// - id as a number
// - name as a string
// - isActive as a boolean
// - email that can be a string or null
// - lastLogin that can be a Date or undefined

type User = {
  id: number;
  name: string;
  isActive: boolean;
  email: string | null;
  lastLogin: Date | undefined;
};

// ## Task 3 — unknown Challenge

// Make the function safely print the value only when it is a string. Then add a second branch for numbers.

function printValue(value: unknown) {
  printValue(value);
  // Your code here
}

// ## Task 4 — never Challenge

// Create a function called throwError that accepts a string message and always throws an Error. Give it the correct return type.

function throwError(message: string): never {
  throw new Error(message);
}



// ## Task 5 — Spot the Problems

// Problems: String and Number are boxed object types, any disables type checking,
// the return type is implicit, and name/age are unused. Since data's shape is not
// specified, unknown requires us to validate it before reading a property.


function processUser(_name: string, _age: number, data: unknown): unknown {
  if (typeof data !== "object" || data === null || !("user" in data)) {
    throw new TypeError("data must be an object with a user property");
  }

  return data.user;
}



// ## Bonus Challenge — Runtime + Type System


// Implement this using typeof checks. Try to make TypeScript narrow the value correctly in every branch.

function formatValue(value: unknown): string {
  if (typeof value === "string") {
    return `String: ${value}`;
  }

  if (typeof value === "number") {
    return `Number: ${value}`;
  }

  if (typeof value === "boolean") {
    return `Boolean: ${value}`;
  }

  return "Other value";
}
