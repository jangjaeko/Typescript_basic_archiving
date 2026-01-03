/**
 * Distributive Conditional Types
 */

type StringNumberSwitch<T> = T extends number ? string : number;
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;
// let varr = StringNumberSwitch<number | string>;  =>false - number type
// => if we wrap T with tuple, it becomes non-distributive conditional types

let varA: StringNumberSwitch<string>; // varA is number
let varB: StringNumberSwitch<number>; // varB is string
let varC: StringNumberSwitch<string | number>; // varC is string | number
// =>if we align union type, it becomes distributive conditional types

let varD: StringNumberSwitch<boolean | number | string>;
//example of distributive conditional types
// 1. StringNumberSwitch<boolean>
// 2. StringNumberSwitch<number>
// 3. StringNumberSwitch<string>
// result 1. number, 2. string, 3. number

// more expample
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1. Exclude<number, string> => number
// 2. Exclude<string, string> => never
// 3. Exclude<boolean, string> => boolean
// result: number | never | boolean => number | boolean ( never is ignored in union type)

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1. Extract<number, string> => never
// 2. Extract<string, string> => string
// 3. Extract<boolean, string> => never
// result: never | string | never => string
