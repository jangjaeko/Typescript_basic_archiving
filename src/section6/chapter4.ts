/**
 * generic class
 */

// to prevent making same code
class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}
const numberList = new List<number>([1, 2, 3]);
numberList.push(4);
numberList.print();
numberList.pop();
numberList.print();

const stringList = new List<string>(["one", "two", "three"]);
stringList.push("four");
stringList.print();
stringList.pop();
stringList.print();
