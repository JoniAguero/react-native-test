import { GetUsersApi } from "../../shared/services/ApiService"
import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../types"

const actionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}

export const startFetchUsers = () => actionCreator(FETCH_USERS_START);
export const successFetchUsers = () => actionCreator(FETCH_USERS_SUCCESS, 'payload');
export const errorFetchUsers = () => actionCreator(FETCH_USERS_ERROR, 'error');

export const fetchUsers = () => {
  async (dispatch) => {
    dispatch(startFetchUsers())
    try {
        const response = await GetUsersApi()
        const data = await response.json()
        dispatch(successFetchUsers(data))
    } catch (e) {
      dispatch(errorFetchUsers(e))
    }
  }
}