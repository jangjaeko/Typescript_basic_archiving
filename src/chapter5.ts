// enum type
// multiple related values under a single type
// enum does not exist in javascript, but exsist after compilation
// it turn into object during compilation

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
enum Role { // numeric enum
  ADMIN,
  USER = 10,
  GUEST,
} // auto incremented from 0, and USER is 10, GUEST is 11

enum Language { // string enum
  KOREAN = "ko",
  ENGLISH = "en",
  JAPANESE = "jp",
}

const ueser1 = {
  name: "jaeho",
  //   role: 0, // 0: admin, 1: user, 2: guest
  role: Role.ADMIN,
  language: Language.KOREAN,
};

const user2 = {
  name: "minsu",
  role: Role.USER,
  language: Language.JAPANESE,
};

const user3 = {
  name: "alice",
  role: Role.GUEST,
};

console.log(ueser1, user2, user3);
