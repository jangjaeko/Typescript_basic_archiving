/**
 * conditional types - types based on condition
 * using extends keyword
 * using '?' and ':'
 */

type A = number extends string ? string : number; // A is number
// type B = string extends string ? string : number; // B is string

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? string : number; // true => B is string

/**
 * generic conditional types
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<string>; // varA is number
let varB: StringNumberSwitch<number>; // varB is string

function removeSpace<T>(text: T): T extends string ? string : undefined;
// overload signatures
function removeSpace<T>(text: T) {
  if (typeof text === "string") {
    return text.replace(/\s+/g, ""); // type assertion
  } else {
    return undefined;
  }
}
let result = removeSpace(" hello world "); // result is string
result.toUpperCase();
