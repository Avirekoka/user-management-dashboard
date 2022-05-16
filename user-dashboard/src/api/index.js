import axios from "axios";

//API's
const UsersURL = "https://reqres.in/api/users";
const AuthURL = "https://reqres.in/api";

//Users handling
export const getUsers = (pageNo) => axios.get(`${UsersURL}/?page=${pageNo}`);

export const createNewUser = (newUserDetails) =>
  axios.post(`${UsersURL}`, newUserDetails);

export const deleteUser = (id) => axios.delete(`${UsersURL}/${id}`);

export const updateUser = (id, userDetails) =>
  axios.patch(`${UsersURL}/${id}`, userDetails);

//Auth handling
export const register = (authData) =>
  axios.post(`${AuthURL}/register`, authData);

export const login = (authData) => axios.post(`${AuthURL}/login`, authData);
