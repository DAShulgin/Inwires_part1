import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import NavigationPanel from './components/Navbar/NavigationPanel';
import NewsContainer from './components/News/NewsContainer';
import MuzikContainer from './components/Muzik/MuzikContainer';
import SettingContainer from './components/Setting/SettingContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UserContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {initializeApp} from './Redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {

    componentDidMount() {
    this.props.initializeApp();
  }
  
  render() {
   
      if(!this.props.initialized)
    return <Preloader />
      
    return (
      <BrowserRouter>
        <div className='grid'>

          <div className='blok1'>
            <HeaderContainer />
          </div>

          <div className='blok2'>
            <NavigationPanel />
          </div>

          <div className='blok3'>
            <Route exact path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={() => <NewsContainer />} />
            <Route path='/muzik' render={() => <MuzikContainer />} />
            <Route path='/setting' render={() => <SettingContainer />} />
            <Route path='/login' render={() => <LoginContainer />} />
          </div>

        </div>

      </BrowserRouter>
    )
  }
}
 
let mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
