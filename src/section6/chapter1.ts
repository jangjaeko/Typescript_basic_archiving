/**
 *  first case of type variable
 */

function swap<T>(a: T, b: T) {
  return [b, a];
}

// const [a,b] = swap("1",2)  // error if fuction has one <T> generic type, both variables should be same type
function swap2<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap2("1", 2); // no error - different type variables allowed

// second case
// with array input, output
function returnFirstValue<T>(data: T[]) {
  return data[0];
}
let num = returnFirstValue([1, 2, 3]);
let str = returnFirstValue(["one", "two", "three"]);
let mix = returnFirstValue([1, "two", true]); // union type array allowed (string | number | boolean)[]

// working with tuple type input
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let mix2 = returnFirstValue2([1, "two", true]); // type of mix2 is number, ingnore other types in tuple

///
interface InterfaceA {
  length: number;
}
interface InterfaceB extends InterfaceA {}

// third case
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength("hello"); // 5
let var2 = getLength([1, 2, 3, 4, 5]); // 5
let var3 = getLength({ length: 10 }); // 10
