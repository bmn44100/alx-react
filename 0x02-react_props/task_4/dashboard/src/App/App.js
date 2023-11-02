import React, { Component } from 'react';
import propTypes from 'prop-types';
import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

const App = ({ isLoggedIn }) => {
    return (        
        <div className="App">
          <Notifications />
          <Header />

          <div className="App-body">
            { isLoggedIn ? <CourseList /> : <Login /> }
          </div>

          <div className="App-footer">
            <Footer />
          </div>
        </div>
     );
  }

  App.defaultProps = {
    isLoggedIn: false
 }

 App.PropTypes = {
    isLoggedIn: PropTypes.bool
 }

 export default App;