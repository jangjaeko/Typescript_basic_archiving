/*
 custom type guard
 */

type Dog = {
  name: string;
  isBark: Boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// if animal in dog type, return true
function isDog(animal: Animal): animal is Dog {
  // custom type guard
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log("dog");
  }
  if (isCat(animal)) {
    console.log("cat");
  }
}
