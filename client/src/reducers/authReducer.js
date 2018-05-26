import { FETCH_USER, LOG_OUT } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.passport.user || false;
    case LOG_OUT:
      return action.payload;
    default:
      return state;
  }
}
