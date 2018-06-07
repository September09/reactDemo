/**
 * Created by september on 2018/6/7.
 */
import * as actionTypes from "./index"
import fetch from "cross-fetch"

// 模拟用户信息
// const user = {
//   name: "",
//   age: 24,
// }

function isLogining() {
  return {
    type: actionTypes.LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess, name) {
  console.log(isSuccess, "success")
  return {
    type: actionTypes.LOGIN_IN_DONE,
    name: name,
  }
}

function loginError(isSuccess) {
  console.log("error", isSuccess)
  return {
    type: actionTypes.LOGIN_IN_ERROR,
  }
}

export function login(name) {
  console.log("登录方法")
  return dispatch => {
    dispatch(isLogining())
    // 模拟用户登录
    const result = fetch("http://localhost:9090/")
      .then((res)=>{
        console.log("res111", res)
        console.log("res111", name)
        dispatch(loginSuccess(true, name))
      }).catch((e)=>{
        console.log("e", e)
        dispatch(loginError(false))
      })

    console.log("result3333", result)
  }
}

export function changeValue(user) {
  return {
    type: actionTypes.CHANGE_VALUE,
    name: user,
  }
}


