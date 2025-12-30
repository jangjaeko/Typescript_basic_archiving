/**
 * interface extension
 */

interface Animal {
  name: string;
  age: number;
}

// they have many same property, so we can use interface extension
interface Dog extends Animal {
  //   name: string;
  //   age: number;
  isBark: boolean;
}
const dog: Dog = {
  // dog has all properties of Animal + isBark
  name: "poppy",
  age: 3,
  isBark: true,
};

interface Cat extends Animal {
  name: "meow"; // can change literal type
  //   age: number;
  isScratch: boolean;
}

interface Chicken extends Animal {
  //   name: string;
  //   age: number;
  isFly: boolean;
}

// multiple interface extension
interface SuperDog extends Dog, Chicken {
  superPower: string;
}
const superDog: SuperDog = {
  name: "meow", // from Cat
  age: 5, // from Animal
  isBark: true, // from Dog
  isFly: false, // from Chicken
  superPower: "fly", // from SuperDog
};
