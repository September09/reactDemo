/**
 * Created by september on 2018/6/7.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  loginStatus: "未登录",
  isSuccess: false,
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOGIN_IN_DOING:
    return {
      ...state,
      loginStatus: "正在登录",
      isSuccess: false,
    }
  case actionTypes.LOGIN_IN_DONE:
    return {
      ...state,
      loginStatus: "登陆成功",
      isSuccess: true,
    }
  case actionTypes.LOGIN_IN_ERROR:
    return {
      ...state,
      loginStatus: "登录出错",
      isSuccess: true,
    }
  default:
    return state
  }
}
