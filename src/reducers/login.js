/**
 * Created by september on 2018/6/7.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  loginStatus: "Login In",
  isSuccess: false,
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOGIN_IN_DOING:
    return {
      ...state,
      loginStatus: "Login Ing",
      isSuccess: false,
    }
  case actionTypes.LOGIN_IN_DONE:
    return {
      ...state,
      loginStatus: "Login Success",
      isSuccess: true,
    }
  case actionTypes.LOGIN_IN_ERROR:
    return {
      ...state,
      loginStatus: "Login Error",
      isSuccess: true,
    }
  default:
    return state
  }
}
