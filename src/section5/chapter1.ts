/**
 * typescript class
 */

import { worker } from "node:cluster";

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
  name: string = "";
  age: number = 0;
  position: string;
  // constructor - special method to initialize object
  constructor(position: string) {
    this.position = position;
  }
  // method
  work() {
    console.log(`${this.name} is working as ${this.position}`);
  }
}

const employeeB = new Employee("designer");
employeeB.name = "minsu";
employeeB.age = 25;
employeeB.work();

const employeeC: Employee = {
  position: "manager",
  name: "sangho",
  age: 35,
  work() {},
};

class ExcutiveOfficer extends Employee {
  // subclassing - inheritance
  // field
  stockOptions: number;
  constructor(position: string, stockOptions: number) {
    super(position); // if omit super, error occurs
    this.stockOptions = stockOptions;
  }
}
