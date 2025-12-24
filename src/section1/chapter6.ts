//any type
// when we don't know the type, we can use any type

let anyVar: any = 123;
anyVar = "hello"; // no error occurs
anyVar = true; // no error occurs

anyVar.toUpperCase(); // no error occurs
anyVar.toFixed(); // no error occurs

let num: number = anyVar; // no error occurs

// but using any type is not recommended
// it could occur when runtime error

// unknown type

let unknownVar: unknown;
unknownVar = 123;
unknownVar = "hello";

// unknownVar.toUpperCase(); // Error: Object is of type 'unknown'.
// num = unknownVar; // Error: Type 'unknown' is not assignable to type 'number'
// we cannot assign unknown type to other types directly

if (typeof unknownVar === "string") {
  // type narrowing
  unknownVar.toUpperCase(); // no error occurs
}
