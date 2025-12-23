// object
// property based type system (structural typing)
// => opposite : nominal typing (class based, ex: java, c#)
let user: { id?: number; name: string } = {
  // object literal type
  // id type is optional property
  id: 1,
  name: "jaeho",
};
console.log(typeof user); // object

// if id is not optional, error occurs
user = {
  name: "minsu",
};

let config: {
  // strict property
  readonly apikey: string;
} = {
  apikey: "12345",
};
