/*
interface
 */

interface IPerson {
  readonly name: string;
  age?: number;
  sayHello(): void;
  sayHello(a: number, b: number): void; // call signature overload
}
// can't make intersection and union type in interface

const person: IPerson = {
  name: "jaeho",
  sayHello() {
    console.log("hello");
  },
};

// person.name = "minsu"; // error, readonly property cannot be changed
person.sayHello();
person.sayHello(1, 2);
