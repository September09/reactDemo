/**
 * Created by september on 2018/5/27.
 */

// import React, { Component } from 'react';
//
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 2,
//     };
//   }
//   add() {
//     this.setState({
//       count: this.state.count + 3,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{ this.state.count }</h1>
//         <button onClick={() => { this.add(); }}>增加3</button>
//         <div><Link to="/page1">去page1</Link></div>
//         <div><Link to="/page2">去page2</Link></div>
//         <div>ceshi</div>
//       </div>
//     );
//   }
// }


import React from 'react';
import { NavLink } from 'react-router-dom';
// import Home from './Home';
// import Stuff from './Stuff';
// import Contact from './Contact';
// import RouterMap from './router';

const Main = () => (
  <div>
    <div><NavLink to="/home">Home</NavLink></div>
    <div><NavLink to="/stuff">Stuff</NavLink></div>
    <div><NavLink to="/contact">Contact</NavLink></div>
  </div>
);

export default Main;
