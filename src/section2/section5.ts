//type assertion

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // assert empty object as Person type
person.name = "jaeho";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "poppy",
  color: "white",
  breed: "poodle", // extra property is allowed with type assertion
} as Dog; // assert object with extra property as Dog type

// type assertion rules

let num1 = 10 as never; // ok, number to never, because never is subtype of all types
let num2 = 10 as unknown; // ok, number to unknown because unknown is supertype of all types
// let num3 = 10 as string; // error, number to string not allowed
let num3 = 10 as unknown as string; // double assertion via unknown is allowed

// const assertion
let num4 = 10 as const; // num4 type is 10 (literal type)

let cat = {
  name: "kitty",
  color: "black",
} as const; // cat type is { readonly name: "kitty"; readonly color: "black" }

// cat.name = "newName"; // error, readonly property cannot be changed

// Non-null assertion
type Post = {
  title: string;
  author?: string;
};
let post: Post = {
  title: "hello",
  author: "jaeho",
};
const len: number = post.author!.length;
// non-null assertion, author is optional but we assert it is not null
