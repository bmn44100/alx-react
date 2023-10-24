import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

export default class App extends Component {
  render () {
    return (
      <div>
           <header class="App-header">
                <img src={logo} alt=''/>
                <h1>School dashboard</h1>
           </header>

           <body class="App-body">
                 <p>Login to access the full dashboard</p>
           </body>

           <footer class="App-footer">
             <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
           </footer>
      </div>
     );
  }
}