import * as api from "../api/index";
import { READ, CREATE, DELETE, UPDATE } from "../constants/constants";
import { toast } from "react-toastify";

//Actions fro users
export const getAllUsers = (pageNo) => async (dispatch) => {
  try {
    const { data } = await api.getUsers(pageNo);
    dispatch({ type: READ, payload: data.data });
  } catch (error) {
    toast.error("Error while fetching users");
  }
};

export const createNewUser = (newUserDetails) => async (dispatch) => {
  try {
    const { data } = await api.createNewUser(newUserDetails);
    dispatch({ type: CREATE, payload: data });
    toast.success("New user created successfully");
  } catch (error) {
    toast.error("Error while creating new user");
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE, payload: id });
    toast.success("User deleted");
  } catch (error) {
    toast.error("Error while deleting");
  }
};

export const updateUser = (id, userDetails) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, userDetails);
    dispatch({ type: UPDATE, payload: data });
    toast.success("User updated");
  } catch (error) {
    toast.error("Error while updating");
  }
};
