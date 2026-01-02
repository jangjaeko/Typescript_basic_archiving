/**
 * template literal types
 * -> create string literal union types by using template literals
 */

type Color = "red" | "blue" | "green";

type Animal = "dog" | "cat" | "mouse";

type ColoredAnimal =
  | "red dog"
  | "red cat"
  | "red mouse"
  | "blue dog"
  | "blue cat"
  | "blue mouse"
  | "green dog"
  | "green cat"
  | "green mouse";
// equivalent to above, because it's not efficient
type ColoredAnimal2 = `${Color} ${Animal}`;
