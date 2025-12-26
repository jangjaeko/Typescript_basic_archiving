/*
type narrowing

For example we can use if statement, switch large type to narrow type
 */

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | Person | null) {
  if (typeof value === "number") {
    // if(typeof value === "number") => type guard - narrowing
    console.log(value.toFixed()); // no error - type narrowed to number
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // no error - type narrowed to string
  }
  //   } else if (typeof value === "object") {
  //     // if null is possible, need to check null also
  //     console.log(value.getDate()); // no error - type narrowed to Date
  //   }
  else if (value instanceof Date) {
    // Date is class type so we can use instanceof
    console.log(value.getDate()); // no error - type narrowed to Date
  } else if (value && "age" in value) {
    console.log(value.age); // no error - type narrowed to Person
  }
}
