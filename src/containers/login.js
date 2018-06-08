/**
 * Created by september on 2018/6/1.
 */
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import "../style/common.scss"
import "../style/register.scss"

import * as loginActions from "../actions/login"


export class Login extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  shouldComponentUpdate(nextProps) {
    // 登录完成,切成功登录
    // console.log("nextState:", nextProps)
    if (nextProps.status === "登陆成功" && nextProps.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      return false
    }
    return true
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="title">登录测试</div>
        <form className="form-horizontal" id="loginForm">
          <div className="form-group">
            <label htmlFor="loginusername" className="col20 fl">用户名</label>
            <div className="col80 fl">
              <input type="text" className="inputStyle" id="loginusername" placeholder="请输入用户名"
                onChange={ (e) => {
                  // console.log("changeValue:", e.target.value)
                  // this.props.loginActions.changeValue("user", e.target.value)
                  this.props.loginActions.changeUserValue({"userName": e.target.value})
                } }
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="loginpassword" className="col20 fl">密码</label>
            <div className="col80 fl">
              <input type="password" className="inputStyle" id="loginpassword" placeholder="请输入密码"
                onChange={ (e) => {
                  // console.log("changeValue:", e.target.value)
                  this.props.loginActions.changePwdValue({"password": e.target.value})
                } }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="btnWrapper">
              <button type="button" className="btn btn-default loginBtn" id="info_submit"
                onClick={()=> {
                  this.props.loginActions.login()
                }}>{this.props.loginStatus.loginStatus}</button>
            </div>
          </div>
        </form>
        <div className="form-group">登录用户为：{this.props.user.userName}</div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loginStatus: state.loginIn,
  user: state.changeInput
})

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
