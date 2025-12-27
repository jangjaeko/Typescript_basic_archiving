/**
 * function type
 */

import { get } from "node:http";

// what kind of type input and output function has
function func(a: number, b: number): number {
  return a + b;
}

/**
 * arrow function type
 */

const add = (a: number, b: number) => {
  a + b;
};

/**
 * function parameters
 */

/// optional parameter must be after required parameter.
// we should keep oreder rule
function introduce(name = "jaeho", age?: number) {
  console.log(`hello my name is ${name}`);
  if (typeof age === "number") {
    console.log(`i am ${age} years old`); // optional parameter
  }
}
introduce("minsu"); // hello my name is minsu

//rest parameter
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((num) => {
    sum += num;
  });
  return sum;
}
function getSumTuple(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((num) => {
    sum += num;
  });
  return sum;
}
getSum(1, 2, 3, 4, 5); // 15
getSum(10, 20, 30); // 60
getSumTuple(1, 2, 3); // 6
// getSumTuple(1,2,3,4); // Error: Expected 3 arguments, but got 4.
