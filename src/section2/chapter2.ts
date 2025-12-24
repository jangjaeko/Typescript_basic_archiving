// object type compatatibility

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

// animal type > dog type
// because animal has less properties than dog
// if object has name and color properties, it is compatible as Animal type

let animal: Animal = {
  name: "doggy",
  color: "brown",
};

let dog: Dog = {
  name: "poppy",
  color: "white",
  breed: "poodle",
};

animal = dog; // ok, dog has all properties of animal
// upcasting allowed

// dog = animal; // error, animal does not have all properties of dog
// downcasting not allowed

// same key same type => compatible

let animal2: Animal = {
  name: "poppy",
  color: "white",
  //   breed: "poodle",
  // extra property is not allowed
};
