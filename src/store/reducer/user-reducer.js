import { LOGOUT, LOGIN, storeName, GETBOOKS } from "../actions/types";

const initialState = {
  userState: 0,
  fullName: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case storeName:
      return { ...state, fullName: action.payload };

    case LOGOUT:
      return { ...state, userState: 0 };

    case LOGIN:
      return { ...state, userState: 1 };

    default:
      return state;
  }
}
