/**
 * Pick<T, K>
 * => pick specific properties from object type
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//make working of Pick type utility type
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "old post",
  content: "old content",
};

/**
 * Omit<T, K>
 * => omit specific properties from object type
 */

//make working of Omit type utility type
type Omit<T, K extends keyof T> = {
  // exclude 'title' from 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in Exclude<keyof T, K>]: T[key];
};

const noTitlePost: Omit<Post, "title"> = {
  tags: ["typescript", "programming"],
  content: "typescript is good",
  thumbnailURL: "http://example.com/thumbnail.jpg",
}; // title is omitted now

/**
 * Record<K, T>
 * => create object type with specific keys and value types
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  wathch: {
    url: string;
  };
};
// same as above but using Record utility type
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

//make working of Record type utility type
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
