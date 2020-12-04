import { FETCH_USERS, GET_USERS_SUCCESS } from "../types";

const initialStaite = {
  users: [],
  error: '',
  fetching: false,
  fetched: false
}

export default (state = initialStaite, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        fetching: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.payload],
        fetching: false,
        fetched: true
      }
  
    default:
      return state;
  }
}