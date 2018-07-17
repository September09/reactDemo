/**
 * Created by september on 2018/7/17.
 */

/*eslint-disable*/

import React, { Component } from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import { browserHistory } from 'react-router'
import Main from './main';

const renderDom = () => {
  render(
    <Main />,
    document.getElementById('index'),
  );
};

renderDom();

// if (module.hot) {
//   module.hot.accept(renderDom());
// }
