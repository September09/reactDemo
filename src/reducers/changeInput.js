/**
 * Created by september on 2018/6/7.
 */
import { handleActions } from "redux-actions"
// import * as actionTypes from "../actions/index"

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
