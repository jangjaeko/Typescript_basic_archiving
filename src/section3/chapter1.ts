/*
 fuction type expression  ( signature)
 */

type Operation = (a: number, b: number) => number;

const Add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * call signature
 * same feature as function type expression
 * using like object type
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string;
  // * hybrid type
};
const Add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

Add2.name = "addition";
