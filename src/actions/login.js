/**
 * Created by september on 2018/6/7.
 */
import * as actionTypes from "./index"
import fetch from "cross-fetch"

// 模拟用户信息
const initialState = {
  user: "",
  password: ""
}

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

export function login() {
  console.log("登录方法")
  return dispatch => {
    dispatch(isLogining())
    // 模拟用户登录
    const result = fetch("http://localhost:9090/")
      .then(()=>{
        dispatch(loginSuccess(true))
      }).catch((e)=>{
        console.log("e", e)
        dispatch(loginError(false))
      })
    console.log(result)
  }
}

export function changeValue(state = initialState) {
  console.log("9999999", state)
  return {
    type: actionTypes.CHANGE_VALUE,
  }
}

