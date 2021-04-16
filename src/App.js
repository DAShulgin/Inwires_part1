import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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




const App = () => {

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
          <Route exact path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <NewsContainer />} />
          <Route path='/muzik' render={() => <MuzikContainer />} />
          <Route path='/setting' render={() => <SettingContainer />} />
          <Route path = '/login' render = { () => <LoginContainer />} />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
