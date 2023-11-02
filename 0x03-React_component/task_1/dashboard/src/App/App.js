import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

class App extends PureComponent {

    componentDidMount() {
      document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === 'h') {
          e.alert('Logging you out');
          this.props.logOut();
        }
      })
    }

    componentWillUnmount() {
      document.removeEventListener("keydown", (e) => {});
    }
    
    render() {

        const {isLoggedIn} = this.props;

        const listCourses = [
          {
            id: 1,
            name: 'ES6',
            credit: 60
          },
          {
            id: 2,
            name: 'Webpack',
            credit: 20
          },
          {
            id: 3,
            name: 'React',
            credit: 40
          }
        ]

        const listNotifications = [
          {
            id: 1,
            type: 'default',
            value: 'New course available'
          },
          {
            id: 2,
            type: 'urgent',
            value: 'New resume available'
          },
          {
            id: 3,
            type: 'urgent',
            html: { __html: getLatestNotification() }
          }
        ]

        return (        
            <div className="App">
              <Notifications listNotifications={listNotifications} />
              <Header />

              <div className="App-body">
                { isLoggedIn ? <CourseList listCourses={ listCourses }/> : <Login /> }
              </div>

              <div className="App-footer">
                <Footer />
              </div>
            </div>
          );
        }
      }

  App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
 }

 App.PropTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
 }

 export default App;