//  discriminated union
// using a common literal property to distinguish between types

type Admin = {
  tag: "ADMIN";
  name: string;
  kickout: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};
// tag is common property to discriminate types
// it is doing same as literal type narrowing
type User = Admin | Member | Guest;

// Admin => (name), you currently  kickout {kickout} members
// Member => (name), you have {point} points
// Guest => (name), you have visited {visitCount} times
function login(user: User) {
  //   if (user.tag === "ADMIN") {
  //     console.log(`${user.name} currently you kickout ${user.kickout} members`);
  //   } else if (user.tag === "MEMBER") {
  //     console.log(`${user.name} you have ${user.point} points`);
  //   } else {
  //     console.log(`${user.name} you have visited ${user.visitCount} times`);
  //   }
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name} currently you kickout ${user.kickout} members`);
      break;
    case "MEMBER":
      console.log(`${user.name} you have ${user.point} points`);
      break;
    case "GUEST":
      console.log(`${user.name} you have visited ${user.visitCount} times`);
      break;
  }
}

/**
 * handling asynchronous code with type narrowing
 */

type AsyncTask = {
  state: "Loading" | "Failed" | "Success";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};
type LoadingState = {
  state: "Loading";
};
type FailedState = {
  state: "Failed";
  error: {
    message: string;
  };
};
type SuccessState = {
  state: "Success";
  response: {
    data: string;
  };
};
type AsyncTaskImproved = LoadingState | FailedState | SuccessState;
const loading: AsyncTaskImproved = {
  state: "Loading",
};
const failed: AsyncTaskImproved = {
  state: "Failed",
  error: {
    message: "Network error",
  },
};
const success: AsyncTaskImproved = {
  state: "Success",
  response: {
    data: "some data",
  },
};

function processResult(task: AsyncTaskImproved) {
  switch (task.state) {
    case "Loading":
      console.log("Loading...");
      break;
    case "Failed":
      // optional chaining
      console.log(`Error: ${task.error.message}`);
      break;
    case "Success":
      console.log(`Data: ${task.response.data}`);
      break;
  }
}
