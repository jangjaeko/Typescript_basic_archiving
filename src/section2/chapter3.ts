// Algebraic Data Type (ADT)
// combination of types using union and intersection

// union type  : A or B, A|B

let a: string | number | boolean = "hello";
a = 123; // ok
a = true; // ok

let arr: (number | string | boolean)[] = [1, "two", true];

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};
type Union1 = Dog | Person;

//dog type
let union1: Union1 = {
  name: "",
  color: "",
};
//person type
let union2: Union1 = {
  name: "",
  language: "",
};
// both properties - union type
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
// only name property
// - error, cause neither dog nor person has only name property
// let union4: Union1 = {
//   name: "",
// };

//
//intersection type : A and B , A & B
//
// usually used to combine object types
let variable: number & string; // impossible type, it turn to never type

type intersection1 = Dog & Person;
let intersectionVar: intersection1 = {
  name: "hello",
  color: "white",
  language: "English",
};
