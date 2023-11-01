import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';
/*import { getFullYear, getFooterCopy } from '../utils/utils';*/

export default function Header(props) {
    return (
        <header className="App-header">
            <img src={logo} alt=''/>
            <h1>School dashboard</h1>
        </header>
    );
  }
