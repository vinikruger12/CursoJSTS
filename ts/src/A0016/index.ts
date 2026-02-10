type User = {username: string, password: string};
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const VerifyUser : VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password == sentValue.password;
};

const bdUser = { username: "vinicius", password: "12345"};
const sentUser = { username: "vinicius", password: "12345"};

const loggedIn = VerifyUser(bdUser, sentUser);
console.log(loggedIn);
