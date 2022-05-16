import {
  READ,
  CREATE,
  UPDATE,
  USER_DETAILS,
  DELETE,
} from "../constants/constants";

const users = (initialUserState = [], actions) => {
  switch (actions.type) {
    case READ:
      return actions.payload;

    case USER_DETAILS:
      return [actions.payload];

    case CREATE:
      console.log(actions.payload);
      return [...initialUserState, actions.payload];

    case DELETE:
      return initialUserState.filter((user) => user.id !== actions.payload);

    case UPDATE:
      return initialUserState.map((user) =>
        user.id === actions.payload.id ? actions.payload : user
      );

    default:
      return initialUserState;
  }
};
export default users;
