// primitive type compatibility

// unkwon type
// highest type in typescript type system

function unKnownExam() {
  // upcasting - it works
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = [1, 2, 3];
  let e: unknown = undefined;

  // downcasting - it doesn't work
  // let num: number = a; // Error: Type 'unknown' is not assignable to type 'number'
  // let str: string = b; // Error: Type 'unknown' is not assignable to type 'string'
}

// never type
// lowest type in typescript type system

function neverExam() {
  function neverFunc(): never {
    while (true) {} //returns never
  }
  // upcasting - it works
  let num: number = neverFunc(); // ok
  let str: string = neverFunc(); // ok
  let bool: boolean = neverFunc(); // ok

  //downcasting - it doesn't work
  let never1: never = neverFunc(); // ok
  //   let never2 : never = 10 // Error: Type '10' is not assignable to type 'never'
}

// void type
// void is supertpye of undifined
function voidExam() {
  function voidFunc(): void {
    console.log("This is a void function");
    return undefined;
  }
  let v: void = undefined; // only undefined can be assigned to void type
}

// any type
// any type disables type checking - cheat type
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undifinedVar: undefined = undefined;
  let neverVar: never;

  // downcasting but it works because of any type
  anyVar = unknownVar; // ok

  unknownVar = anyVar; // ok

  //downcasting but it works because of any type
  undifinedVar = anyVar; // ok

  //neverVar = anyVar ; // error , because never don't allow any assignmen
}
