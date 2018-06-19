/**
 * Created by september on 2018/6/7.
 */
import { createAction } from "redux-actions"
import * as actionTypes from "./index"
import HttpUtil from "../utils/httpUtils"

// 模拟用户信息
// const initialState = {
//   userName: "",
//   password: ""
// }

function isLogining() {
  return {
    type: actionTypes.LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess) {
  console.log(isSuccess, "success")
  return {
    type: actionTypes.LOGIN_IN_DONE
  }
}

function loginError(isSuccess) {
  console.log("error", isSuccess)
  return {
    type: actionTypes.LOGIN_IN_ERROR,
  }
}

export function login(userName, password) {
  console.log(333333)
  return dispatch => {
    dispatch(isLogining())
    // 模拟用户登录
    const result = HttpUtil.postData("/user/login", {
      userName: userName,
      password: password
    })
    result.then(res =>{
      console.log("res", res)
      dispatch(loginSuccess(true))
    }).catch(json =>{
      console.log("json", json)
      dispatch(loginError(false))
    })
    console.log(result)
  }
}

export const updateBindMobileState = createAction("updateBindMobileState", payload => payload)


