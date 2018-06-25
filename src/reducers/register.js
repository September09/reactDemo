/**
 * Created by september on 2018/6/25.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  registerStatus: "未注册",
  isSuccess: false,
}

export default function register(state = initialState, action) {
  switch (action.type) {
  case actionTypes.REGISTER_IN_DOING:
    return {
      ...state,
      registerStatus: "正在注册",
      isSuccess: false,
    }
  case actionTypes.REGISTER_IN_DONE:
    return {
      ...state,
      registerStatus: "注册成功",
      isSuccess: true,
    }
  case actionTypes.REGISTER_IN_ERROR:
    return {
      ...state,
      registerStatus: "注册出错",
      isSuccess: true,
    }
  default:
    return state
  }
}
