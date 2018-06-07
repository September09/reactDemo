/**
 * Created by september on 2018/6/1.
 */
import React, { Component } from "react"
import "../style/common.scss"
import "../style/register.scss"


export default class Register extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="title">注册测试</div>
        <form className="form-horizontal" id="loginForm">
          <div className="form-group">
            <label htmlFor="loginusername" className="col20 fl">用户名</label>
            <div className="col80 fl">
              <input type="text" className="inputStyle" id="loginusername" placeholder="请输入用户名" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="loginpassword" className="col20 fl">密码</label>
            <div className="col80 fl">
              <input type="password" className="inputStyle" id="loginpassword" placeholder="请输入密码" />
            </div>
          </div>
          <div className="form-group">
            <div className="btnWrapper">
              <button type="button" className="btn btn-default loginBtn" id="info_submit">注册</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
