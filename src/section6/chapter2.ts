/**
 * map method, foreach method with generics expamle
 */

// make fuction acting like map method
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
map(arr, (it) => it * 2);
map(["one", "two", "three"], (it) => parseInt(it)); // error, callback return type should be string

// foreach
function forEach<T>(arr: T[], callBack: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i]);
  }
}
forEach([1, 2, 3], (it) => console.log(it.toFixed()));

forEach(["1", "2", "3"], (it) => {
  it;
});
