/**
 * mapped types - create new types based on existing types
 * using keyof and in operator
 * - we can only use in 'type' context, not in 'interface' context
 */

interface User {
  id: number;
  name: string;
  age: number;
}

//mapped type
type PartialUser = {
  [key in keyof User]?: User[key];
  //[key] : value type
  //ex id : User['id' ] => number , name: User['name'] => string
};
//mapped type ex 2
type BooleanUser = {
  [key in keyof User]?: boolean;
};
// ex 2
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// load one user info
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: "jaeho",
    age: 30,
  };
}

// edit user info
function updateUser(user: PartialUser) {}
updateUser({
  //   id: 1,
  //   name: "minsu",
  age: 25,
});
