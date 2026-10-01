## 1 Project setup

```shell
mkdir typescript-learning
cd typescript-learning
npm init -y
npm install --save-dev typescript
```

Confirm the installed compiler version with:

```shell
npx tsc --version
```

##  2 — Create Your First Program

Create src/index.ts with:

```ts
const userName: string = "Your Name";
const age: number = 25;
console.log(`Hello ${userName}, you are ${age} years old.`);
```

Compile it and run the generated JavaScript.

##  3 — Create tsconfig.json

Initialize the project configuration:

```shell
npx tsc --init
```

Then configure it so your source is under src and your generated JavaScript goes under dist.

##  4 — Break the Type System

Change:

```ts
const age: number = 25;
```

to:

```ts
const age: number = "twenty-five";
```

Run the compiler and read the error carefully. Do not fix it immediately. First explain in your own words what TypeScript is protecting you from.

## 5 — Watch Mode

Add a development script:

```shell
"dev": "tsc --watch"
```


- Why do we keep TypeScript as a dev dependency?
- What problem does tsconfig.json solve?
- Why is a project-local TypeScript version useful?
