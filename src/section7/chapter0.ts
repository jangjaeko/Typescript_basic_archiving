/**
 * indexed access type
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const key = "author"; // we can't use this in indexed access type directly because type of key is string
function printAuthorInfo(author: Post["author"]) {
  // indexed access type usage - if author type changes in Post interface, it is reflected here
  console.log(`Author ID: ${author.id}`);
  console.log(`Author Name: ${author.name}`);
  console.log(`Author Age: ${author.age}`);
}
function printAuthorInfo2(author: Post["author"]["id"]) {
  // indexed access type usage - if author type changes in Post interface, it is reflected here
  console.log(`Author ID: ${author}`);
}
printAuthorInfo2(1); // Author ID: 1

const post: Post = {
  title: "hello",
  content: "world",
  author: {
    id: 1,
    name: "jaeho",
    age: 30,
  },
};

///
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];
const posts: PostList[number] = {
  title: "typescript",
  content: "typescript is good",
  author: {
    id: 2,
    name: "minsu",
    age: 25,
  },
};
console.log(posts);

function printPostTitle(post: PostList[number]) {
  console.log(`Post Title: ${post.title}`);
}
printPostTitle(posts); // Post Title: typescript

type Tup = [string, number, boolean];
type First = Tup[0]; // string
type Second = Tup[1]; // number
type Third = Tup[2]; // boolean
type TupleElementTypes = Tup[number]; // string | number | boolean
