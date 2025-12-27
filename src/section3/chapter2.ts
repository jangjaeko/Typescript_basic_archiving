/**
 * fuction type compatibility
 * specific function type > some function type
 * 1. parameter count
 * 2. parameter type
 * 3. return type
 */

// return type
type A = () => number;
type B = () => 10;

let a: A = () => 5;
let b: B = () => 10;
a = b; // allowed - B is more specific than A
// b = a; // Error: Type 'A' is not assignable to type 'B'

// parameter
// 1 . parameter count is same
type C = (a: number) => void;
type D = (a: 10) => void;
let c: C = (a) => {};
let d: D = (a) => {};

// c = d; // error
d = c; // allowed - downcasting but it works
// because parameter is contravariant

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  breed: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name + " " + dog.breed);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;
let testFunc = (animal: Animal) => {
  console.log(animal.name);
};
let testFuct2 = (dog: Dog) => {
  console.log(dog.name + " " + dog.breed);
};

// parameter count different
// more parameters => less parameters
// at least same parametmer type are same at same position

type E = (a: number, b: number) => void;
type F = (a: number, b: number, c: number) => void;

let e: E = (a, b) => {};
let f: F = (a, b, c) => {};
//e = f  // error
f = e;
