import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
/*import { getFullYear, getFooterCopy } from '../utils/utils';*/

function Header() {
    return (
        <header className={css(headerStyles.root, headerStyles.appHeader)}>
            <img src={logo} className={css(headerStyles.appLogo)} alt="logo"/>
            <h1 style={css(headerStyles.h1)}>School dashboard</h1>
        </header>
    )
  }

const primaryColor = '#E11D3F';

const headerStyles = StyleSheet.create({
    h1: {
        marginLeft: '3rem', 
    },

    appHeader: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        color: '${primaryColor}',
        borderBottom: '1px solid ${primaryColor}',
    },

    appLogo: {
        height: '200px',
        width: '200px'
    }
});

export default Header;
