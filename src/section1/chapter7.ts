// void

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("this is func2");
  // if no return in fuction
}
function func3(): undefined {
  //   console.log("this is func3");
}

let b: void = undefined; // only undefined can be assigned to void type

// func2();
// func3();

// never
// impossible type
function func4(): never {
  while (true) {}
}

function func5(): never {
  throw new Error("This is an error");
}

// let a : never = 1
// // never type cannot be assigned to other types, evenv any type
