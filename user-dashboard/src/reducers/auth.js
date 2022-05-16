import { AUTHENTICATION, LOGOUT } from "../constants/constants";
const auth = (initialAuthState = { authData: null }, actions) => {
  switch (actions.type) {
    case AUTHENTICATION:
      localStorage.setItem("user", JSON.stringify({ ...actions.payload }));
      return {
        ...initialAuthState,
        authData: actions.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      localStorage.clear();
      return { ...initialAuthState, authData: null, isLoggedIn: false };

    default:
      return initialAuthState;
  }
};

export default auth;
