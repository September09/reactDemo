/**
 * Created by september on 2018/6/7.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  user: "",
  password: "",
}

export default function ChangeValue(state = initialState, action) {
  switch (action.type) {
  case actionTypes.CHANGE_USER_VALUE:
    return action.userName
  case actionTypes.CHANGE_PWD_VALUE:
    return action.password
  default:
    return state
  }
}
