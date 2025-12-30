/**
 *  javascriptclass
 */

let studentA = {
  name: "kim",
  age: 20,
  grade: "A",
  study() {
    console.log("studying");
  },
  introduce() {
    console.log("hi");
  },
};

let studentB = {
  name: "kim",
  age: 20,
  grade: "A",
  study() {
    console.log("studying");
  },
  introduce() {
    console.log("hi");
  },
};
// samme structure and functionality repeated multiple times
// class can help to solve this problem

class Student {
  // fields
  name;
  age;
  grade;
  // constructor - special method
  // making new object and initializing fields
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  //methods
  study() {
    console.log("studying");
  }
  introduce() {
    console.log("hi" + ` my name is ${this.name}`);
  }
}
let studentC = new Student("jaeho", 30, "B");
console.log(studentC);
studentC.study();
studentC.introduce();

// extends class - inheritance
// multiple class can share common/same fields and methods
class StudentDeveloper extends Student {
  // fields

  favorateLanguage;

  // constructor
  constructor(name, age, grade, favorateLanguage) {
    super(name, age, grade);
    this.favorateLanguage = favorateLanguage;
  }

  // methods
  program() {
    console.log(`my favorate language is ${this.favorateLanguage}`);
  }
}

const studetntDeveloperA = new StudentDeveloper(
  "devJaeho",
  30,
  "A",
  "TypeScript"
);
console.log(studetntDeveloperA);
studetntDeveloperA.program();
