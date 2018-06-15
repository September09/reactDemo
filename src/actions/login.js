/**
 * Created by september on 2018/6/7.
 */
import * as actionTypes from "./index"
import fetchPost from "../utils/post"

// 模拟用户信息
const initialState = {
  userName: "",
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
  return dispatch => {
    dispatch(isLogining())
    // 模拟用户登录
    const result = fetchPost("http://localhost:3110/", {
      username: 1111111,
      password: 83094037
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

export function changeUserValue(state = initialState) {
  return {
    type: actionTypes.CHANGE_USER_VALUE,
    userName: state,
  }
}

export function changePwdValue(state = initialState) {
  return {
    type: actionTypes.CHANGE_PWD_VALUE,
    password: state
  }
}


