/**
 * access modifier
 * => public, private, protected
 */

const employee = {
  name: "jaeho",
  age: 30,
  position: "developer",
  work() {
    console.log(`${this.name} is working as ${this.position}`);
  },
};

// it can use as a object type also
class Employee {
  // field
  public name: string; //public by default access modifier
  private age: number; // can't access outside of class, dffrent from readonly
  protected position: string; // can access in subclass
  // constructor - special method to initialize object
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // method
  work() {
    console.log(
      `${this.name} is working as ${this.position} and I'm ${this.age} years old`
    );
  }
}

const employeeA = new Employee("minsu", 25, "designer");
employeeA.name = "sangho"; // public property can be accessed outside of class
// employeeA.age = 26;
// employeeA.position = "manager";

class ExcutiveOfficer extends Employee {
  stockOptions: number;
  constructor(
    name: string,
    age: number,
    position: string,
    stockOptions: number
  ) {
    super(name, age, position); // if omit super, error occurs
    this.stockOptions = stockOptions;
  }
  fucn() {
    // this.age = 50; // error - private property of superclass can't be accessed
    this.position = "CEO"; // protected property can be accessed in subclass
  }
}
