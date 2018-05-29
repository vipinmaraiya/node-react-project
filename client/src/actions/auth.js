import * as actionTypes from "./actionTypes";
import axios from "axios";

export const handleToken = token => {
  return async dispatch => {
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
  };
};

export const fetchUser = () => {
  return async dispatch => {
    let res = await axios.get("/api/current_user");
    dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
  };
};

export const logoutUser = () => {
  return async dispatch => {
    let res = await axios.get("/api/logout");
    dispatch({ type: actionTypes.LOG_OUT, payload: !res.data });
  };
};
