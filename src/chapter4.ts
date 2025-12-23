// Type alias
// creating a new name for a type for reusablility
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  sex: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "jaeho",
  nickname: "jh",
  birth: "1997-06-26",
  sex: "male",
  location: "vancouver",
};

let user2: User = {
  id: 2,
  name: "jaeho",
  nickname: "jh",
  birth: "1997-06-26",
  sex: "male",
  location: "vancouver",
};

// function type alias
function func() {
  // it is possible to create function type alias but not recommended
  type User = {
    id: number;
  };
}

// index signature
type CountryCodes = {
  [key: string]: string; // key is string type, value is string type
};

let contrycodes: CountryCodes = {
  Korea: "ko",
  USA: "us",
  Japan: "jp",
};

type CountryNumberCodes = {
  [key: string]: number;
  //   Korea: number; // must have Korea property
};
let countryNumberCodes: CountryNumberCodes = {
  //   Korea: 82,
};
// no error, can be empty object.
