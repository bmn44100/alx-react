import React, { useContext } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';

export function Header() {
    const { user, logOut } = useContext(AppContext);
    
    if (!user.isLoggedIn) {
        return (
            <header className={css(headerStyles.root, headerStyles.appHeader)}>
                <img src={logo} className={css(headerStyles.appLogo)} alt="logo"/>
                <h1 style={css(headerStyles.h1)}>School dashboard</h1>
            </header>
        )
    } else {
        return (
            <React.Fragment>
                <header className={css(headerStyles.root, headerStyles.appHeader)}>
                    <img src={logo} className={css(headerStyles.appLogo)} alt="logo"/>
                    <h1 style={css(headerStyles.h1)}>School dashboard</h1>
                </header>
                <div className={css(headerStyles.greeting)} id="logoutSection">
                    <h2>
                        Welcome
                        <strong> {user.email} </strong>
                        <em><a href="#" onClick={logOut}>(logout)</a></em>
                    </h2>
                </div>
            </React.Fragment>
        )
    }
    
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

const mapStateToProps = (state) => {
    return {
        user: state.get('user'),
    };
};

const mapDispatchToProps = {
    logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);