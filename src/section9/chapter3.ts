/**
 * Exclude<T,U>
 * => exclude types from union type T that are assignable to U
 */

type A = Exclude<number | string | boolean, string>;
// A is number | boolean

// make working of Exclude type utility type
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract<T,U>
 * => extract types from union type T that are assignable to U
 */

type B = Extract<number | string | boolean, string>;
// B is string

// make working of Extract type utility type
type Extract<T, U> = T extends U ? T : never;

/**
 * ReturnType<T>
 * => extract return type from function type T
 */
function funcA() {
  return "hello";
}
function funcB() {
  return 42;
}
type returnA = ReturnType<typeof funcA>; // returnA is string
type returnB = ReturnType<typeof funcB>; // returnB is number

// make working of ReturnType type utility type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
