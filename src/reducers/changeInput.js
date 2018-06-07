/**
 * Created by september on 2018/6/7.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  name: "",
}

export default function ChangeValue(state = initialState, action) {
  switch (action.type) {
  case actionTypes.CHANGE_VALUE:
    return {
      ...state,
      name: "",
    }
  default:
    console.log("state111111:", state)
    return state
  }
}
