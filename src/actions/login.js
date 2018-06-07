/**
 * Created by september on 2018/6/7.
 */
import * as actionTypes from "./index"
import fetch from "cross-fetch"

// 模拟用户信息
const user = {
  name: "zhangsan",
  age: 24,
}

function isLogining() {
  return {
    type: actionTypes.LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess, User) {
  console.log(isSuccess, "success")
  return {
    type: actionTypes.LOGIN_IN_DONE,
    user: User,
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
    const result = fetch("https://www.baidu.com/")
      .then((res)=>{
        console.log("res111", res)
        dispatch(loginSuccess(true, user))
      }).catch((e)=>{
        console.log("e", e)
        dispatch(loginError(false))
      })

    console.log("result3333", result)
  }
}


