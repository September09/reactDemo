/**
 * Created by september on 2018/7/11.
 */

import { handleActions } from "redux-actions"
// import * as actionTypes from "../actions/index"

const initialState = {
  "data": {}
}

export default handleActions({
  userInfoState: (state = initialState, { payload }) => {
    console.log(999999999)
    return {
      ...state,
      ...payload
    }
  }
}, initialState)