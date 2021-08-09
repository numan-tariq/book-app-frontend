import { LOGOUT, LOGIN, storeName } from "./types";

export const userFullName = (name) => (dispatch) => {
  dispatch({
    type: storeName,
    payload: name,
  });
};

export const userLogin = () => (dispatch) => {
  dispatch({
    type: LOGIN,
  });
};

export const userLogout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
