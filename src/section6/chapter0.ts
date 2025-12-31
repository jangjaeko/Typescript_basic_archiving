/**
 * generic - allows to create reusable components
 * works with classes, interfaces, functions
 * allows to use types as variables
 */

// generic function
function func<T>(value: T): T {
  // T is type variable - can assume type when function is called
  return value;
}

let num = func(123); // type of num is number
let str = func("hello"); // type of str is string
let bool = func(true); // type of bool is boolean

let arr = [1, 2, 3]; // type of arr is number[]

// specify type when calling generic function
let arr2 = func<[number, number, number]>([4, 5, 6]);
// type of arr2 is [number, number, number] as tuple type
