import * as api from "../api/index";
import { AUTHENTICATION } from "../constants/constants";
import { toast } from "react-toastify";

// Actions for authentication
export const register = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(authData);
    console.log(data);
    dispatch({ type: AUTHENTICATION, payload: data });
    toast.success("Register successfully");
    navigate("/");
  } catch (error) {
    toast.error("Failed to register");
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(authData);
    dispatch({ type: AUTHENTICATION, payload: data });
    toast.success("login successfully");
    navigate("/");
  } catch (error) {
    toast.error("Failed to login");
  }
};
