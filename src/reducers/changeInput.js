/**
 * Created by september on 2018/6/7.
 */
import { handleActions } from "redux-actions"
// import * as actionTypes from "../actions/index"

// const initialState = {
//   user: "",
//   password: "",
// }
//
// export default function ChangeValue(state = initialState, action) {
//   switch (action.type) {
//   case actionTypes.CHANGE_USER_VALUE:
//     return action.userName
//   case actionTypes.CHANGE_PWD_VALUE:
//     return action.password
//   default:
//     return state
//   }
// }

const initialState = {
  "userName": "",
  "password": ""
}

export default handleActions({

  updateBindMobileState: (state = initialState, { payload }) => {
    console.log(999999999)
    return {
      ...state,
      ...payload
    }
  }
}, initialState)
