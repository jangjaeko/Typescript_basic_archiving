/**
 * keyof Type Operator
 * -> takes an object type and produces a string or numeric literal union of its keys
 */

// interface Person {
//   name: string;
//   age: number;
//   //if we add more properties here, keyof Person result will be changed automatically
// }

type Person = typeof person; // automatically infer type from person object

//function getProperty(person: Person, key: keyof Person) {
function getProperty(person: Person, key: keyof typeof person) {
  // key type is 'name' | 'age' (string literal union type)
  return person[key];
}

const person = {
  name: "jaeho",
  age: 30,
};

getProperty(person, "name"); // ok
