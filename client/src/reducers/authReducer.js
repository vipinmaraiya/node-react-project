import * as actionTypes from "../actions/actionTypes";

export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    case actionTypes.LOG_OUT:
      return action.payload;
    default:
      return state;
  }
}
