/**
 * Created by september on 2018/06/07.
 */

import loginIn from "./login"
import changeInput from "./changeInput"
import { combineReducers } from "redux"

const reducer = combineReducers({
  loginIn,
  changeInput
})

export default reducer
