import http from "../helpers/axios";

let userExist = false;

export const AuthService = {
  login,
  logout,
  userExist,
  checkExistedEmail,
  saveUserInLocalStorage,
  getCurrentUserFromLocalStorage,
};

function getCurrentUserFromLocalStorage() {
  return JSON.parse(localStorage.getItem("current_user") || "{}");
}

/* logout */
function logout() {
  localStorage.setItem("current_user", "{}");
  return JSON.parse(localStorage.getItem("current_user") || "{}");
}

/* Login */
function login(payload) {
  return checkExistedUserAsync(payload);
}

async function checkExistedUserAsync(payload) {
  const response = await http.get(
    `/users?email=${payload.email}&password=${payload.password}`
  );
  const users = await response.data;
  if (users && users.length > 0) {
    userExist = true;
    let currentUser = Object.assign({}, users[0]);
    saveUserInLocalStorage(currentUser);
  } else {
    userExist = false;
  }
  return userExist;
}

/* save user in localstorage */
function saveUserInLocalStorage(user) {
  let currentUser = {
    firstname: user.firstName,
    lastname: user.lastName,
    email: user.email,
  };
  localStorage.setItem("current_user", JSON.stringify(currentUser));
  return JSON.parse(localStorage.getItem("current_user"));
}

/* check for email if exist */
function checkExistedEmail(user) {
  return checkExistedEmailAsync(user);
}

async function checkExistedEmailAsync(user) {
  const response = await http.get(`/users?email=${user.email}`);
  const users = await response.data;
  if (users && users.length > 0) {
    userExist = true;
  } else {
    userExist = false;
  }
  return userExist;
}
