import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { InitializedApp } from './Redux/app-reducer';
import NavigationPanel from './components/Navbar/NavigationPanel';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UserContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
const MuzikContainer = React.lazy(() => import('./components/Muzik/MuzikContainer'));
const SettingContainer = React.lazy(() => import('./components/Setting/SettingContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.InitializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
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
          <Suspense fallback={ <Preloader />} > 
            <Route exact path='/profile/:userId?' render={() => <ProfileContainer /> }/>
            <Route path='/dialogs' render={() => <DialogsContainer/> } />    
            <Route path='/users' render={() =>  <UsersContainer /> } />
            <Route path='/news' render={() => <NewsContainer /> } />
            <Route path='/muzik' render={() => <MuzikContainer /> } />
            <Route path='/setting' render={() => <SettingContainer /> } />
            <Route path='/login' render={() => <LoginContainer /> } />
          </Suspense>
          </div>

        </div>

      </BrowserRouter>
    )
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, { InitializedApp })(App);