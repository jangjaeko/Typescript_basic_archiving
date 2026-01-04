/**
 * infer
 * = inference, it helps to infer type inside conditional types
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;
type ReturnTypeInfer<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // A is string
type B = ReturnType<FuncB>; // B is never
//
type C = ReturnTypeInfer<FuncA>; // C is string
type D = ReturnTypeInfer<FuncB>; // D is number
type E = ReturnTypeInfer<number>; // E is never

//example 2
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T = promise type
// 2. return type of promise

type PromiseA = PromiseUnpack<Promise<number>>; // PromiseA is number
type PromiseB = PromiseUnpack<Promise<string>>; // PromiseB is string
