/**
 *  Partial<T>
 * => make specific type's all properties optional
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//make working of Partial type utility type
type Partial<T> = {
  [key in keyof T]?: T[key];
};
const draft: Partial<Post> = {
  title: "typescript",
  content: "typescript is good",
}; // thumbnailURL and tags are optional now

/**
 * Required<T>
 * => make specific type's all properties required
 */

//make working of Required type utility type
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnail: Required<Post> = {
  title: "typescript",
  tags: ["typescript", "programming"],
  content: "typescript is good",
  thumbnailURL: "http://example.com/thumbnail.jpg",
}; // thumbnailURL is required now

/**
 * Readonly<T>
 * => make specific type's all properties readonly
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
const readonlyPost: Readonly<Post> = {
  title: "typescript",
  tags: ["typescript", "programming"],
  content: "typescript is good",
  thumbnailURL: "http://example.com/thumbnail.jpg",
};

// readonlyPost.title = "new title";
// // Error: cannot reassign a readonly property
