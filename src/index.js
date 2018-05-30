/**
 * Created by september on 2018/5/27.
 */

/*eslint-disable*/

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import { browserHistory } from 'react-router'
import RouterMap from './router';

import App from './App'

const renderDom = () => {
  render(
    <AppContainer>
        <RouterMap />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderDom();

if (module.hot) {
  module.hot.accept(renderDom());
}
