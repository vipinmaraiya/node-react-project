import axios from "axios";
import { FETCH_USER, LOG_OUT } from "./types";

export const fetchUser = () => {
  return async dispatch => {
    let res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const logoutUser = () => {
  return async dispatch => {
    let res = await axios.get("/api/logout");
    dispatch({ type: LOG_OUT, payload: !res.data });
  };
};
