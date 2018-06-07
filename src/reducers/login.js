/**
 * Created by september on 2018/6/7.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  loginStatus: "点击登录",
  isSuccess: false,
  user: "未登录",
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOGIN_IN_DOING:
    return {
      ...state,
      loginStatus: "正在登录",
      isSuccess: false,
      user: "未登录",
    }
  case actionTypes.LOGIN_IN_DONE:
    return {
      ...state,
      loginStatus: "登陆成功",
      isSuccess: true,
      user: action.user,
    }
  case actionTypes.LOGIN_IN_ERROR:
    return {
      ...state,
      loginStatus: "登录出错",
      isSuccess: true,
      user: "未登录",
    }
  default:
    console.log(state)
    return state
  }
}
