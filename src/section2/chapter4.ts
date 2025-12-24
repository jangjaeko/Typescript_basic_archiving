/**
 *  type inference
 * when we don't specify type, typescript automatically infers the type
 */

let a = 10; // a: number -> type expension to wide type, not a literal type
let b = "hello";
let c = {
  id: 1,
  name: "jaeho",
  project: {
    name: "typescript-basic",
  },
};

// if we define something, typescript infers type. we can check with hover

function add(message = "hello") {
  return message;
}

// any type evolution
let d; // any type by default
d = 10; // d = number type
d.toFixed(); // no error
// d.toUpperCase(); // error, typescript infer d as number
d = "hello"; // no error - d = string type
d.toUpperCase(); // no error

// diffrent between const and let
const num = 10; // num: 10 - literal type
// num = 20; // error - const cannot be reassigned

//union type
let arr = [1, "string"]; // arr: (string | number)[]
