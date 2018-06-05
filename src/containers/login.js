/**
 * Created by september on 2018/6/1.
 */
import React from 'react';
import '../style/common.scss';

const Login = () => (
  <div className="loginWrapper">
    <div className="userWrapper">
      <div className="col30 fl">用户名：</div>
      <div className="col50 fl"><input type="text" placeholder="请输入用户名" /></div>
    </div>
    <div className="pwdWrapper">
      <div className="col30 fl">密码：</div>
      <div className="col50 fl"><input type="password" placeholder="请输入密码" /></div>
    </div>
    <button className="loginBtn">登录</button>
  </div>
);

export default Login;
