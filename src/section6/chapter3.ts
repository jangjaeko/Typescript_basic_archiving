/**
 * generic interface - doc term
 * generic type parameters
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 123,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["one", "two", "three"],
};

/**
 * index signature with generic type
 */

//basic index signature
interface NumberMap {
  [key: string]: number;
}
let numberMap1: NumberMap = {
  key: 123,
  key2: 456,
};

//
interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key1: "value1",
  key2: "value2",
};
let booleanMap: Map<boolean> = {
  key1: true,
  key2: false,
};

/**
 * generic type alias
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key1: "value1",
};

/**
 * gneric interface example
 * => user managing system
 * => we have 2 user type : student, developer
 */

interface Student {
  type: "student";
  school: string;
}
interface Developer {
  type: "developer";
  skill: string;
}
interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  //   if (user.profile.type !== "student") {
  //     console.log("not a student");
  //     return;
  //   }
  const school = user.profile.school;
  console.log(`go to ${school}`);
}

const developerUser: User<Developer> = {
  name: "jaeho",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};
const studentUser: User<Student> = {
  name: "minsu",
  profile: {
    type: "student",
    school: "university",
  },
};

// goToSchool(developerUser); // Error: Argument of type 'User<Developer>' is not assignable to parameter of type 'User<Student>'
goToSchool(studentUser); // ok
