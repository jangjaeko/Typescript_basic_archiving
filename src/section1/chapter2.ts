// array
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["one", "two", "three"];

let boolArr: Array<boolean> = [true, false, true]; // generic array type

// multi type input in array : union type
let multiArr: (string | number)[] = [1, "two", 3, "four"];

// multi dimensional array
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//tuple : fixed length array with specified types

let tuple1: [string, number, boolean] = ["hello", 42, true];
// tuple1 = [42, "hello", true]; // Error: Type 'number' is not assignable to type 'string'
// type and order must match

// array methods on tuple do work
tuple1.push(100); // ok - push is allowed
console.log(tuple1); // ["hello", 42, true, 100]
tuple1.pop(); // ok - pop is allowed

const users: [number, string][] = [
  [1, "Alice"],
  [2, "Bob"],
  [3, "Charlie"],
  //   ['sdf', 4], // Error: Type 'string' is not assignable to type 'number'
];
