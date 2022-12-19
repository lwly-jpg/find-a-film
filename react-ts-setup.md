# How to setup React with Typescript

Simply run:

```bash
npx create-react-app my-app --template typescript
```

## Moving forward with Typescript

Typescript is a superset of javascript so you can continue to code within the files without doing anything differently.

Running `create-react-app` means that all of the config has been dealt with for you. The `.tsx` files will be automatically compiled.

When creating new files add the extension `.tsx` and all is OK.

## What should be different then?

We can incrementally play with Typescript. If you initialize a variable for example:

```js
const myCounter = 0;
```

Then it will automatically be inferred that this variable is of type Number. You will see linting messages if you later try to change the type like so:

```js
const myCounter = 0;
myCounter = null; // <-- will show error and probably not compile
```
