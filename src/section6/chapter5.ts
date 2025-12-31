/**
 * Promise with generics
 */

//interface Promise<T> { => defined in lib.d.ts
// new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("error occurred");
    //(parameter) reject: (reason?: any) => void
  }, 2000);
});
promise.then((res) => {
  console.log(res * 10);
});

promise.catch((err) => {
  //    (parameter) err: any
  if (typeof err === "string") {
    // type narrowing
    console.log("Promise rejected with reason: " + err);
  }
});

/**
 * return promise from function
 *
 */

interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPostById(): Promise<Post> {
  //   return new Promise<Post>((resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "typescript",
        content: "typescript is good",
      });
    }, 2000);
  });
}

const postRequest = fetchPostById();
postRequest.then((res) => {
  res.id;
});
