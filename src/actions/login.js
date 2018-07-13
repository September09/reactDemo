/**
 * Created by september on 2018/6/7.
 */
import { createAction } from "redux-actions"
import * as actionTypes from "./index"
import HttpUtil from "../utils/httpUtils"

function isLogining() {
  return {
    type: actionTypes.LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess, res) {
  console.log(isSuccess, "success")
  return {
    type: actionTypes.LOGIN_IN_DONE,
    data: res
  }
}

function loginError(isSuccess) {
  console.log("error", isSuccess)
  return {
    type: actionTypes.LOGIN_IN_ERROR,
  }
}

function isRegistering() {
  return {
    type: actionTypes.REGISTER_IN_DOING
  }
}

function RegisterSuccess(isSuccess) {
  console.log(isSuccess, "success")
  return {
    type: actionTypes.REGISTER_IN_DONE
  }
}

function RegisterError(isSuccess) {
  console.log("error", isSuccess)
  return {
    type: actionTypes.REGISTER_IN_ERROR,
  }
}

export function login(userName, password) {
  return dispatch => {
    dispatch(isLogining())
    // 模拟用户登录
    HttpUtil.postData("/user/login", {
      userName: userName,
      password: password
    }).then(res =>{
      if (res.status === 0) {
        console.log("res", res)
        localStorage.setItem('token', res.token)
        dispatch(loginSuccess(true, res))
      }
    }).catch(
      // console.log("err", err)
      dispatch(loginError(false))
    )
  }
}

export function register(userName, password) {
  return dispatch => {
    dispatch(isRegistering())
    // 模拟用户注册
    HttpUtil.postData("/user/register", {
      userName: userName,
      password: password
    }).then(res =>{
      if (res.status === 0) {
        console.log("res", res)
        dispatch(RegisterSuccess(true))
      } else {
        console.log("res", res)
        dispatch(RegisterError(false))
      }
    })
  }
}

export const updateBindMobileState = createAction("updateBindMobileState", payload => payload)


