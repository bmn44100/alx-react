import React, { useContext } from 'react';
import { connect } from 'react-redux';
import AppContext from '../App/AppContext';
import { getFullYear, getFooterCopy } from '../utils/utils';

export function Footer() {
    const { user, logOut } = useContext(AppContext);

    if (user.isLoggedIn) {
        return (
            <footer className="App-footer">
              <p>{getFullYear()} - {getFooterCopy(true)}</p>
            </footer>
        );
    
    } else {
        return (
          <footer className="App-footer">
            <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
            <a href="">Contact us</a>
          </footer>
      );
    }
    
  }

  const mapStateToProps = (state) => {
    return {
      user: state.get('user'),
    };
  };

  export default connect(mapStateToProps, null)(Footer);