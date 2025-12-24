// 원시 타입
// Primitive Type
//number
let num1: number = 123; // type annotation =
let num2: number = -456;
let num3: number = 0b1010; // binary
let num4: number = 0o765; // octal
let num5: number = 0xff; // hexadecimal
let num6: number = Infinity;
let num7: number = NaN;
console.log(num1, num2, num3, num4, num5, num6, num7);

//string
let str1: string = "Hello, TypeScript!";
let str2: string = "Single quotes string";
let str3: string = `Template literal string with ${str1}`;

//str1 = 123   // Error: Type 'number' is not assignable to type 'string'
//srt1.toFixed() // Error: Property 'toFixed' does not exist on type 'string'

//boolean
let bool1: boolean = true;
let bool2: boolean = false;

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

// let numA: number = null; // js = ok but tsconfig.json --strictNullChecks = false

// literal types : you can assign only that exact value // literal = value
let literalNum: 10 = 10; // only can assign 10
// literalNum = 20; // Error: Type '20' is not assignable to type '10'
