/**
 *  declaration merging
 */

interface Person {
  name: string;
}
interface Person {
  //   name : number; // error - confilct type
  // name : 'hello' // error - conflict type also literal type
  name: string;
  age: number;
}
// merged into one interface Person
const person: Person = {
  name: "jaeho",
  age: 30,
};

/**
 * interface merging with module augmentation
 */

// Let assume this interface is in external library
interface Lib {
  a: number;
  b: number;
}

// we can add new property to Lib interface
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // error - c not exist in Lib
};
