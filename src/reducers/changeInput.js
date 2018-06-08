/**
 * Created by september on 2018/6/7.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  user: "",
  password: "",
}

export default function ChangeValue(state = initialState, action) {
  console.log(222222, state)
  switch (action.type) {
  case actionTypes.CHANGE_VALUE:
    return {
      ...state,
      user: state.name
    }
  default:
    console.log("33333333:", state)
    return state
  }
}
