/**
 * Created by september on 2018/5/27.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/common.scss';

const Main = () => (
  <div className="backgroundIndex">
    <div><NavLink to="/home">Home</NavLink></div>
    <div><NavLink to="/stuff">Stuff</NavLink></div>
    <div><NavLink to="/contact">Contact</NavLink></div>
    <div><NavLink to="/login">登录</NavLink></div>
    <div><NavLink to="/register">注册</NavLink></div>
  </div>
);

export default Main;
